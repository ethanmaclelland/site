// EASY CONTENT EDITOR FOR ETHAN MACLELLAND'S WEBSITE
// =======================================================
// Edit this file to change all text on your website
// Just change the text between the quotes and save!

const siteContent = {
    // ===========================
    // HERO SECTION (Top of homepage)
    // ===========================
    hero: {
        name: "Ethan MacLelland",
        subtitle: "Engineer | Serial Entrepreneur | Problem Solver", 
        location: "📍 Boston, Massachusetts",
        description: "I'm the kind of mechanical engineer who actually enjoys when people say 'that's impossible'. Give me a complex design challenge or a property renovation that makes contractors shake their heads, and I'm in my element. Currently transforming historic buildings and building real estate value through strategic BRRR investments across my growing portfolio.",
        
        // Stats that appear below description
        stats: {
            properties: {number: "4+", label: "Properties Renovated"},
            vacancy: {number: "0%", label: "Vacancy Rate"}, 
            projects: {number: "$2M+", label: "Projects Managed"}
        },
        
        // Button text
        buttons: {
            contact: "Let's Connect",
            linkedin: "View LinkedIn"
        }
    },

    // ===========================
    // ABOUT SECTION
    // ===========================
    about: {
        title: "About Me",
        paragraphs: [
            "There's something deeply satisfying about taking apart complex problems and putting them back together in ways that just work, and work well. My UConn mechanical engineering background gives me the technical foundation, but my real strength comes from seeing opportunities where others see obstacles.",
            
            "My entrepreneurial journey started early - I was buying broken iPods, fixing them up, and flipping them for profit on my family room floor. But real estate captured my attention during my sophomore year at UConn when my Zillow search filters switched from \"For Rent\" to \"For Sale.\" That's how I discovered The Vinton, a Victorian Tudor that became my first investment property and the foundation of MAC Development Co.",
            
            "I've dabbled in everything from iOS apps to e-commerce stores to landscaping businesses, and now I run MAC Development Co., specializing in value-add real estate investments using the BRRR strategy. I've also gained valuable field engineering experience managing critical MBTA infrastructure projects, which taught me invaluable lessons about working under pressure and coordinating complex operations.",
            
            "What drives me isn't just building things that work — it's building things that work better than anyone thought possible."
        ]
    },

    // ===========================
    // EXPERTISE SECTION
    // ===========================
    expertise: {
        title: "What I Do",
        cards: [
            {
                icon: "🏗️",
                title: "Real Estate Development", 
                description: "Specialized in BRRR strategy (Buy, Renovate, Rent, Refinance) for value-add residential and commercial properties, consistently delivering projects on time and under budget."
            },
            {
                icon: "⚙️",
                title: "Engineering Solutions",
                description: "Mechanical engineering expertise with innovative problem-solving approach, from CAD design to complex project management. Previous experience includes critical infrastructure work on MBTA rail systems."
            },
            {
                icon: "🚀", 
                title: "Entrepreneurship",
                description: "Serial entrepreneur with experience across multiple industries - from tech startups to landscaping businesses, always finding creative ways to create value and build sustainable businesses."
            }
        ]
    },

    // ===========================
    // PORTFOLIO SECTION
    // ===========================
    portfolio: {
        title: "Featured Projects",
        
        // Project descriptions (keep these updated with your latest work!)
        vinton: {
            title: "The Vinton",
            date: "2019 - Present",
            description: "While searching for off-campus housing at UConn, my Zillow filters switched from \"For Rent\" to \"For Sale.\" This Victorian-era Tudor became my first property and the foundation of MAC Development Co. Completely transformed from a distressed property into a profitable 6-bedroom, 3-bathroom student rental.",
            tags: ["Victorian Restoration", "Portfolio Foundation"],
            galleryButton: "📸 View Transformation Gallery"
        },
        
        trap: {
            title: "The Trap",
            date: "2022 - 2023", 
            description: "A strategic value-add acquisition that exemplifies the BRRR methodology in action. This property required complete systems and interior renovations to unlock its rental potential and maximize returns on investment.",
            tags: ["Complete Renovation", "Systems Upgrade", "ROI Optimization"],
            galleryButton: "📸 View Transformation Gallery"
        }, 
                
        poolhouse: {
            title: "The Pool House",
            date: "2023 - 2024",
            description: "A brutalist-styled house built in the 1970s featuring a large inground pool near UConn's campus.",
            tags: ["Brutalist-style", "Premium Positioning"], 
            galleryButton: "📸 View Transformation Gallery"
        },
        
        church: {
            title: "St. Joseph's Church", 
            date: "2025 - Present",
            description: "My most ambitious project yet - converting a beautiful 1935 stone church building that served the community until 2008 into a modern mixed-use property. This project represents the evolution of my expertise from residential renovations to complex adaptive reuse developments.",
            tags: ["Historic Preservation", "Adaptive Reuse", "Mixed-Use Development"],
            galleryButton: "📸 View Renovation Progress"
        },
        
        mbta: {
            title: "MBTA Field Engineering Projects",
            date: "2024 - 2025 | SPS New England",
            description: "Managed critical field engineering operations across multiple MBTA lines during high-stakes shutdown windows. Managed complex track improvement projects, coordinated material logistics, and ensured seamless execution under extreme time constraints across Orange, Green, and Red transit lines.",
            tags: ["Track Improvement Program", "Project Management"],
            galleryButton: "📸 View Project Gallery"
        }
    },

    // ===========================
    // EXPERIENCE SECTION
    // ===========================
    experience: {
        title: "Professional Journey",
        // Note: Timeline content is structured in HTML for better visual control
        // You can update individual job descriptions by editing the HTML directly
        // or we can move this to the content system if you prefer
    },

    // ===========================
    // RESUME SECTION
    // ===========================
    resume: {
        title: "Resume",
        header: {
            icon: "📋",
            title: "Professional Resume",
            description: "Comprehensive overview of my experience in mechanical engineering, real estate development, and entrepreneurship. Download to see the full details of my technical skills, project achievements, and professional journey.",
            buttons: {
                view: "📄 View Resume",
                download: "⬇️ Download PDF"
            }
        },
        highlights: [
            {
                icon: "🎓",
                title: "Education", 
                description: "B.S. Mechanical Engineering<br>University of Connecticut, 2022"
            },
            {
                icon: "💼",
                title: "Current Role",
                description: "Project Manager<br>MAC Development Co."
            },
            {
                icon: "🏆", 
                title: "Key Achievement",
                description: "0% Vacancy Rate<br>Across Property Portfolio"
            }
        ]
    },

    // ===========================
    // CONTACT SECTION
    // ===========================
    contact: {
        title: "Let's Build Something Together",
        form: {
            nameLabel: "Name",
            emailLabel: "Email", 
            projectLabel: "Project Type",
            projectOptions: [
                {value: "", text: "Select a project type"},
                {value: "real-estate", text: "Real Estate Development"}, 
                {value: "engineering", text: "Engineering Consultation"},
                {value: "entrepreneurship", text: "Business Collaboration"},
                {value: "other", text: "Other"}
            ],
            messageLabel: "Tell me about your project",
            messagePlaceholder: "Describe your challenge or opportunity...",
            submitButton: "Send Message"
        }
    },

    // ===========================
    // NAVIGATION
    // ===========================
    navigation: {
        logo: "EM",
        links: [
            {href: "#home", text: "Home"},
            {href: "#about", text: "About"}, 
            {href: "#expertise", text: "Expertise"},
            {href: "#portfolio", text: "Portfolio"},
            {href: "#experience", text: "Experience"},
            {href: "#resume", text: "Resume"},
            {href: "#contact", text: "Contact"}
        ]
    },

    // ===========================
    // FOOTER
    // ===========================
    footer: {
        socialLinks: [
            {href: "https://www.linkedin.com/in/emaclelland/", text: "LinkedIn"},
            {href: "mailto:macdevelopmentco@gmail.com", text: "Email"}
        ],
        copyright: "© 2025 Ethan MacLelland. All rights reserved."
    },

    // ===========================
    // QUICK EDIT TIPS
    // ===========================
    /* 
    🔧 QUICK EDITING TIPS:
    
    1. TO UPDATE YOUR STATS:
       - Change the numbers in hero.stats
       - Example: "5+" to "7+" for more properties
    
    2. TO ADD A NEW PROJECT:
       - Add a new section under portfolio
       - Follow the same format as existing projects
       - Don't forget to add images and gallery data!
    
    3. TO UPDATE YOUR STORY:
       - Edit the paragraphs in the about section
       - Add or remove paragraphs as needed
    
    4. TO CHANGE EXPERTISE:
       - Update the cards in the expertise section
       - Change icons, titles, or descriptions
    
    5. COMMON UPDATES:
       - Job title: Change hero.subtitle
       - Location: Change hero.location  
       - Main description: Change hero.description
       - Project statuses: Update portfolio dates
    
    📝 REMEMBER:
    - Keep quotes around all text
    - Don't forget commas between items
    - Test your changes after uploading
    - Use GitHub's edit history if something breaks
    
    💡 NEED HELP?
    - Check the README.md file for detailed instructions
    - Each section is clearly labeled above
    - Make small changes and test them first!
    */
};
