const mongoose = require('mongoose');

module.exports = [
    {
        title: "Introduction to Computer Science",
        description: "An introductory course covering the basics of programming, algorithms, and data structures.",
        duration: "1 semester",
        fees: 2000,
        college:null, // Replace with actual College ID
        ratings: [4.2, 4.5, 4.0],
        reviews: [
            {
                userId: "67344777143adc47ddeb31fc", // Replace with actual User ID
                reviewText: "A great start for anyone new to programming.",
                rating: 4
            }
        ]
    },
    {
        title: "Mechanical Engineering Fundamentals",
        description: "A foundational course for understanding the principles of mechanical engineering.",
        duration: "2 semesters",
        fees: 3000,
        college:null,
        ratings: [4.0, 3.8, 4.3],
        reviews: [
            {
                userId: "67344777143adc47ddeb31fd",
                reviewText: "Challenging but very rewarding.",
                rating: 4
            }
        ]
    },
    {
        title: "Digital Marketing Essentials",
        description: "Learn the basics of digital marketing, including SEO, social media, and content creation.",
        duration: "1 semester",
        fees: 1500,
        college:null,
        ratings: [4.5, 4.3, 4.1],
        reviews: [
            {
                userId: "67344777143adc47ddeb31fe",
                reviewText: "Very informative and practical.",
                rating: 5
            }
        ]
    },
    {
        title: "Data Science and Analytics",
        description: "An advanced course on data science techniques and data analysis methods.",
        duration: "2 semesters",
        fees: 4000,
        college:null,
        ratings: [4.7, 4.8, 4.6],
        reviews: [
            {
                userId: "67344777143adc47ddeb31ff",
                reviewText: "Excellent course with hands-on projects.",
                rating: 5
            }
        ]
    },
    {
        title: "Cybersecurity Fundamentals",
        description: "A comprehensive course on the fundamentals of cybersecurity.",
        duration: "1 semester",
        fees: 2500,
        college:null,
        ratings: [4.6, 4.7, 4.5],
        reviews: [
            {
                userId: "67344777143adc47ddeb3200",
                reviewText: "Covers all the basics and more.",
                rating: 5
            }
        ]
    },
    {
        title: "Business Management",
        description: "Covers the principles of business management, including leadership and organizational behavior.",
        duration: "1 year",
        fees: 5000,
        college:null,
        ratings: [4.4, 4.2, 4.5],
        reviews: [
            {
                userId: "67344777143adc47ddeb31fc",
                reviewText: "Good content, but needs more case studies.",
                rating: 4
            }
        ]
    },
    {
        title: "Artificial Intelligence",
        description: "An advanced course covering AI algorithms and machine learning techniques.",
        duration: "2 semesters",
        fees: 5500,
        college:null,
        ratings: [4.8, 4.9, 4.7],
        reviews: [
            {
                userId: "67344777143adc47ddeb31fd",
                reviewText: "Very engaging and well-structured.",
                rating: 5
            }
        ]
    },
    {
        title: "Environmental Science",
        description: "Study of environmental issues and sustainability practices.",
        duration: "1 semester",
        fees: 1800,
        college:null,
        ratings: [4.2, 4.1, 4.0],
        reviews: [
            {
                userId: "67344777143adc47ddeb31fe",
                reviewText: "A vital subject for today's world.",
                rating: 4
            }
        ]
    },
    {
        title: "Ethics in Technology",
        description: "An overview of ethical issues related to technology and digital innovation.",
        duration: "1 semester",
        fees: 1200,
        college:null,
        ratings: [4.3, 4.4, 4.1],
        reviews: [
            {
                userId: "67344777143adc47ddeb31ff",
                reviewText: "Very thought-provoking and well-taught.",
                rating: 5
            }
        ]
    },
    {
        title: "Introduction to Psychology",
        description: "A survey course covering the major areas of psychology.",
        duration: "1 semester",
        fees: 2000,
        college:null,
        ratings: [4.5, 4.6, 4.2],
        reviews: [
            {
                userId: "67344777143adc47ddeb3200",
                reviewText: "Great introductory course.",
                rating: 4
            }
        ]
    },
    // Continue adding more courses in a similar format until you have a total of 20 courses
];
