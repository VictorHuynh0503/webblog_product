import { supabase } from '../lib/supabase';
const sampleArticles = {
    engineering: [
        {
            title: "Modern Software Architecture Patterns",
            content: "Software architecture has evolved significantly over the past decade. Microservices, serverless computing, and event-driven architectures have become the norm in modern software development...",
            excerpt: "An exploration of contemporary software architecture patterns and their practical applications.",
            tags: ["engineering", "software", "architecture"]
        },
        {
            title: "The Future of Robotics Engineering",
            content: "As we advance into a new era of technological innovation, robotics engineering stands at the forefront of revolutionary changes. From collaborative robots to AI-powered automation...",
            excerpt: "Discover the latest trends and innovations in robotics engineering.",
            tags: ["engineering", "robotics", "automation"]
        },
        {
            title: "Sustainable Engineering Solutions",
            content: "Sustainable engineering is becoming increasingly crucial in our fight against climate change. This article explores innovative approaches to creating environmentally friendly solutions...",
            excerpt: "Exploring eco-friendly approaches in modern engineering practices.",
            tags: ["engineering", "sustainability", "green-tech"]
        }
    ],
    science: [
        {
            title: "Quantum Computing Breakthroughs",
            content: "Recent developments in quantum computing have opened up new possibilities in computational science. This article discusses the latest breakthroughs and their implications...",
            excerpt: "Understanding recent advances in quantum computing technology.",
            tags: ["science", "quantum-computing", "technology"]
        },
        {
            title: "The Science of Climate Change",
            content: "Climate science has made significant strides in understanding global warming patterns. This comprehensive analysis looks at the latest research and findings...",
            excerpt: "An in-depth look at current climate science research and findings.",
            tags: ["science", "climate", "environment"]
        },
        {
            title: "Neuroscience and Artificial Intelligence",
            content: "The intersection of neuroscience and AI is revealing new insights into both human cognition and machine learning. This article explores the fascinating connections...",
            excerpt: "Exploring the convergence of neuroscience and artificial intelligence.",
            tags: ["science", "neuroscience", "AI"]
        }
    ],
    technology: [
        {
            title: "The Evolution of 5G Networks",
            content: "5G technology is transforming how we connect and communicate. This deep dive explores the technical innovations behind 5G and its real-world applications...",
            excerpt: "Understanding the impact and future of 5G technology.",
            tags: ["technology", "5G", "networking"]
        },
        {
            title: "Blockchain Beyond Cryptocurrency",
            content: "While blockchain is known for cryptocurrencies, its applications extend far beyond. This article examines innovative uses of blockchain technology...",
            excerpt: "Exploring diverse applications of blockchain technology.",
            tags: ["technology", "blockchain", "innovation"]
        },
        {
            title: "The Rise of Edge Computing",
            content: "Edge computing is revolutionizing how we process and analyze data. Learn about its benefits, challenges, and real-world implementations...",
            excerpt: "Discovering the potential of edge computing in modern technology.",
            tags: ["technology", "edge-computing", "IoT"]
        }
    ],
    programming: [
        {
            title: "Modern TypeScript Patterns",
            content: "TypeScript has evolved to become a powerful tool for building robust applications. This guide covers advanced patterns and best practices...",
            excerpt: "Advanced TypeScript patterns for modern application development.",
            tags: ["programming", "typescript", "javascript"]
        },
        {
            title: "Rust for Systems Programming",
            content: "Rust's safety guarantees and performance make it ideal for systems programming. This article provides a comprehensive introduction...",
            excerpt: "Getting started with Rust for systems programming.",
            tags: ["programming", "rust", "systems"]
        },
        {
            title: "Python in Machine Learning",
            content: "Python has become the go-to language for machine learning. This guide explores essential libraries and practical applications...",
            excerpt: "Leveraging Python for machine learning applications.",
            tags: ["programming", "python", "machine-learning"]
        }
    ],
    mathematics: [
        {
            title: "The Beauty of Number Theory",
            content: "Number theory, often called the queen of mathematics, offers fascinating insights into the properties of numbers. This article explores key concepts...",
            excerpt: "Exploring fundamental concepts in number theory.",
            tags: ["mathematics", "number-theory", "pure-math"]
        },
        {
            title: "Applied Mathematics in Data Science",
            content: "Mathematical concepts form the foundation of modern data science. This article bridges the gap between pure math and its practical applications...",
            excerpt: "Understanding the role of mathematics in data science.",
            tags: ["mathematics", "data-science", "applied-math"]
        },
        {
            title: "Introduction to Topology",
            content: "Topology, a fundamental area of mathematics, studies properties that remain unchanged under continuous deformations. This introduction covers key concepts...",
            excerpt: "A beginner's guide to topological concepts in mathematics.",
            tags: ["mathematics", "topology", "geometry"]
        }
    ]
};
export async function seedArticles() {
    for (const [category, articles] of Object.entries(sampleArticles)) {
        for (const article of articles) {
            const slug = article.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            const { error } = await supabase
                .from('posts')
                .insert([{
                    title: article.title,
                    slug,
                    content: article.content,
                    excerpt: article.excerpt,
                    category,
                    tags: article.tags,
                    status: 'published',
                    is_featured: false,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                }])
                .single();
            if (error) {
                console.error(`Error seeding article "${article.title}":`, error);
            }
            else {
                console.log(`Successfully seeded article: ${article.title}`);
            }
        }
    }
}
