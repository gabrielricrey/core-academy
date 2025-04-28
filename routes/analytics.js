const express = require('express');
const router = express.Router();
const Order = require("../models/Order");
const { auth, adminAuth } = require("../middleware/auth")


router.get('/revenue-per-month', auth, adminAuth, async (req, res) => {
    const now = new Date();
    const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), 1);

    try {
        const result = await Order.aggregate([
            {
                $match: {
                    purchasedAt: { $gte: oneYearAgo },
                    status: "completed"
                }
            },
            {
                $lookup: {
                    from: "courses",
                    localField: "courses",
                    foreignField: "_id",
                    as: "courseDetails"
                }
            },
            {
                $unwind: "$courseDetails"
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$purchasedAt" },
                        month: { $month: "$purchasedAt" }
                    },
                    totalRevenue: { $sum: "$courseDetails.price" }
                }
            },
            {
                $project: {
                    monthYear: {
                        $concat: [
                            {
                                $arrayElemAt: [
                                    [
                                        "", "januari", "februari", "mars", "april", "maj", "juni",
                                        "juli", "augusti", "september", "oktober", "november", "december"
                                    ],
                                    "$_id.month"
                                ]
                            },
                            "-",
                            { $toString: "$_id.year" }
                        ]
                    },
                    totalRevenue: 1
                }
            },
            {
                $sort: {
                    "_id.year": -1,
                    "_id.month": -1
                }
            }
        ]);

        const formattedResult = {};
        result.forEach(item => {
            formattedResult[item.monthYear] = item.totalRevenue;
        });

        if (!result || result.length === 0) {
            return res.status(404).json({ message: "No orders found" });
        }

        res.status(200).json(formattedResult);
    } catch (error) {
        res.status(500).json({ message: "Server error: " + error })
    }
});

router.get('/top-customers', auth, adminAuth, async (req, res) => {
    try {
        const result = await Order.aggregate([{
            $match: { status: "completed" }
        },
        {
            $lookup: {
                from: "courses",
                localField: "courses",
                foreignField: "_id",
                as: "courseDetails"
            }
        },
        {
            $unwind: "$courseDetails"
        },
        {
            $group: {
                _id: "$user",
                totalCost: { $sum: "$courseDetails.price" }
            }
        },
        {
            $sort: { totalCost: -1 }
        },
        {
            $limit: 5
        }
        ])

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: "Server error: " + error.message})
    }
})


module.exports = router;