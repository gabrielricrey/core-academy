const users = require("./users");
const courses = require("./courses");

// Generate orders with specific users and courses
const generateOrders = () => {
  const orders = [
    // Sarah Johnson's orders (Mathematics and Computer Science teacher)
    {
      user: users[0]._id, // Sarah Johnson
      courses: [courses[0]._id, courses[7]._id], // Algebra and Computer Science
      status: "completed",
      paymentMethod: "credit_card",
      paymentStatus: "completed",
      purchasedAt: new Date("2025-03-01"),
      completedAt: new Date("2025-03-05"),
      notes: "Order #1 - 2 courses",
    },
    {
      user: users[0]._id,
      courses: [courses[1]._id], // Creative Writing
      status: "pending",
      paymentMethod: "paypal",
      paymentStatus: "pending",
      purchasedAt: new Date("2025-03-15"),
      notes: "Order #2 - 1 course",
    },
    {
      user: users[0]._id,
      courses: [courses[7]._id, courses[12]._id], // Computer Science and Psychology
      status: "completed",
      paymentMethod: "bank_transfer",
      paymentStatus: "completed",
      purchasedAt: new Date("2025-02-10"),
      completedAt: new Date("2025-02-15"),
      notes: "Order #3 - 2 courses",
    },

    // Michael Chen's orders (Science and Physics teacher)
    {
      user: users[1]._id, // Michael Chen
      courses: [courses[3]._id, courses[5]._id, courses[8]._id], // Physics, Chemistry, Environmental Science
      status: "completed",
      paymentMethod: "bank_transfer",
      paymentStatus: "completed",
      purchasedAt: new Date("2025-02-15"),
      completedAt: new Date("2025-02-20"),
      notes: "Order #4 - 3 courses",
    },
    {
      user: users[1]._id,
      courses: [courses[6]._id], // Art History
      status: "cancelled",
      paymentMethod: "credit_card",
      paymentStatus: "failed",
      purchasedAt: new Date("2025-03-10"),
      cancelledAt: new Date("2025-03-11"),
      notes: "Order #5 - 1 course",
    },
    {
      user: users[1]._id,
      courses: [courses[3]._id, courses[8]._id], // Physics and Environmental Science
      status: "completed",
      paymentMethod: "debit_card",
      paymentStatus: "completed",
      purchasedAt: new Date("2025-01-20"),
      completedAt: new Date("2025-01-25"),
      notes: "Order #6 - 2 courses",
    },

    // Emily Rodriguez's orders (English and Creative Writing teacher)
    {
      user: users[2]._id, // Emily Rodriguez
      courses: [courses[1]._id, courses[10]._id], // Creative Writing and Public Speaking
      status: "completed",
      paymentMethod: "debit_card",
      paymentStatus: "completed",
      purchasedAt: new Date("2025-02-20"),
      completedAt: new Date("2025-02-25"),
      notes: "Order #7 - 2 courses",
    },
    {
      user: users[2]._id,
      courses: [courses[10]._id, courses[6]._id], // Public Speaking and Art History
      status: "pending",
      paymentMethod: "paypal",
      paymentStatus: "pending",
      purchasedAt: new Date("2025-03-18"),
      notes: "Order #8 - 2 courses",
    },
    {
      user: users[2]._id,
      courses: [courses[1]._id], // Creative Writing
      status: "completed",
      paymentMethod: "credit_card",
      paymentStatus: "completed",
      purchasedAt: new Date("2025-01-15"),
      completedAt: new Date("2025-01-20"),
      notes: "Order #9 - 1 course",
    },

    // David Kim's orders (History and Geography teacher)
    {
      user: users[3]._id, // David Kim
      courses: [courses[2]._id, courses[11]._id], // World History and World Geography
      status: "completed",
      paymentMethod: "credit_card",
      paymentStatus: "completed",
      purchasedAt: new Date("2025-03-05"),
      completedAt: new Date("2025-03-10"),
      notes: "Order #10 - 2 courses",
    },
    {
      user: users[3]._id,
      courses: [courses[2]._id, courses[11]._id, courses[6]._id], // World History, World Geography, and Art History
      status: "completed",
      paymentMethod: "bank_transfer",
      paymentStatus: "completed",
      purchasedAt: new Date("2025-02-01"),
      completedAt: new Date("2025-02-06"),
      notes: "Order #11 - 3 courses",
    },
    {
      user: users[3]._id,
      courses: [courses[11]._id], // World Geography
      status: "cancelled",
      paymentMethod: "credit_card",
      paymentStatus: "failed",
      purchasedAt: new Date("2025-03-12"),
      cancelledAt: new Date("2025-03-13"),
      notes: "Order #12 - 1 course",
    },

    // Lisa Anderson's orders (Music and Art History teacher)
    {
      user: users[4]._id, // Lisa Anderson
      courses: [courses[6]._id, courses[9]._id], // Art History and Music Theory
      status: "pending",
      paymentMethod: "paypal",
      paymentStatus: "pending",
      purchasedAt: new Date("2025-03-20"),
      notes: "Order #13 - 2 courses",
    },
    {
      user: users[4]._id,
      courses: [courses[9]._id, courses[10]._id], // Music Theory and Public Speaking
      status: "completed",
      paymentMethod: "debit_card",
      paymentStatus: "completed",
      purchasedAt: new Date("2025-02-25"),
      completedAt: new Date("2025-03-01"),
      notes: "Order #14 - 2 courses",
    },
    {
      user: users[4]._id,
      courses: [courses[6]._id], // Art History
      status: "completed",
      paymentMethod: "credit_card",
      paymentStatus: "completed",
      purchasedAt: new Date("2025-01-30"),
      completedAt: new Date("2025-02-04"),
      notes: "Order #15 - 1 course",
    },

    // James Wilson's orders (Admin)
    {
      user: users[5]._id, // James Wilson
      courses: [courses[4]._id, courses[7]._id, courses[12]._id], // Spanish, Computer Science, Psychology
      status: "completed",
      paymentMethod: "bank_transfer",
      paymentStatus: "completed",
      purchasedAt: new Date("2025-02-25"),
      completedAt: new Date("2025-03-01"),
      notes: "Order #16 - 3 courses",
    },
    {
      user: users[5]._id,
      courses: [courses[10]._id, courses[11]._id], // Public Speaking and World Geography
      status: "completed",
      paymentMethod: "credit_card",
      paymentStatus: "completed",
      purchasedAt: new Date("2025-01-10"),
      completedAt: new Date("2025-01-15"),
      notes: "Order #17 - 2 courses",
    },
    {
      user: users[5]._id,
      courses: [courses[3]._id, courses[8]._id], // Physics and Environmental Science
      status: "pending",
      paymentMethod: "paypal",
      paymentStatus: "pending",
      purchasedAt: new Date("2025-03-22"),
      notes: "Order #18 - 2 courses",
    },
  ];

  return orders;
};

module.exports = generateOrders();
