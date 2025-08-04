const aboutUsMenu = [
  "🏢 Company Story",
  "🌟 Why Choose Us",
  "📍 Our Locations",
  "🎯 Our Services",
  "🏆 Awards & Achievements",
];

const returnToMenuOptions = [
  "🚗 Browse Used Cars",
  "💰 Get Car Valuation",
  "📞 Contact Our Team",
  "ℹ️ About Us",
  "👋 End conversation",
];

async function handleAboutUsStep(session, userMessage) {
  const step = session.step || "about_menu";
  console.log("📘 About Us - Current Step:", step);
  console.log("📝 User Input:", userMessage);

  switch (step) {
    case "about_menu":
      session.step = "about_selection";
      return {
        message: "Welcome to Sherpa Hyundai! Here's what you'd like to know about us:",
        options: aboutUsMenu
      };

    case "about_selection":
      if (userMessage.includes("Company Story")) {
        return {
          message: `Here's our journey and what makes Sherpa Hyundai special: 🚗✨

🏁 Where It All Began:
Sherpa Hyundai started with a simple mission — to make car buying and ownership a smooth, honest, and enjoyable experience for every customer.

🏢 Our Roots:
With over 15 years in the automotive industry, we’ve grown from a single dealership to a trusted name in Bangalore for Hyundai cars — both new and certified pre-owned.

👨👩👧👦 Customer First Approach:
We’ve proudly served 10,000+ happy customers, thanks to our commitment to transparency, value, and after-sales care.

🚀 What Drives Us:
Our passion is to help families and individuals find the right vehicle that fits their needs, lifestyle, and budget — while delivering 5-star service at every step.

🌱 Our Vision:
To be the most loved and recommended Hyundai dealership in South India — trusted for both our people and our processes.

Want to explore more?`,
          options: aboutUsMenu.concat(["🏠 Back to main menu"])
        };
      }

      if (userMessage.includes("Why Choose")) {
        return {
          message: `Here's why thousands of customers trust Sherpa Hyundai:

⭐ WHY CHOOSE SHERPA HYUNDAI:
🔍 Quality Assurance:
✅ 200+ point inspection on every car
✅ Only certified pre-owned vehicles
✅ Complete service history verification

💰 Best Value:
✅ Competitive pricing
✅ Fair trade-in values
✅ Transparent pricing - no hidden costs

🛡️ Trust & Reliability:
✅ 15+ years in automotive industry
✅ 10,000+ happy customers
✅ Extended warranty options

🎯 Complete Service:
✅ End-to-end car buying support
✅ Financing assistance
✅ Insurance & documentation help

📞 After-Sales Support:
✅ Dedicated service team
✅ Genuine spare parts
✅ Regular maintenance reminders

Want to know more?`,
          options: ["📍 Visit Showroom", "🚗 Browse Used Cars", "📞 Contact Us", "🏠 Back to main menu"]
        };
      }

      if (userMessage.includes("Our Locations")) {
        return {
          message: `We'd love to welcome you! Here are our locations:

📍 SHERPA HYUNDAI LOCATIONS:

🏢 Main Showroom - Bangalore:
📍 Address: 123 MG Road, Bangalore - 560001
📞 Phone: +91-9876543210
🕒 Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM
🅿️ Facilities: Free parking, Test drive facility, Customer lounge

🏢 Branch - Electronic City:
📍 Address: 456 Hosur Road, Electronic City - 560100
📞 Phone: +91-9876543211
🕒 Timings: Mon-Sat: 9:00 AM - 8:00 PM

🗺️ How to Reach:
🚇 Metro: MG Road Metro Station (2 min walk)
🚌 Bus: Multiple bus routes available
🚗 Car: Easy access from Ring Road

📱 Before You Visit:
✅ Call ahead to ensure car availability
✅ Bring valid ID for test drives
✅ Our team will be ready to assist you

Ready to visit?`,
          options: ["📞 Call to Confirm", "🚗 Browse Cars Online", "🏠 Back to main menu"]
        };
      }

      if (userMessage.includes("Services")) {
        return {
          message: `At Sherpa Hyundai, we offer everything you need — from car buying to servicing — all under one roof! 🚘💼

🎯 OUR SERVICES INCLUDE:

🆕 New Car Sales
✅ Full range of Hyundai models
✅ Expert sales consultation
✅ Test drive at your convenience

🚗 Certified Pre-Owned Cars
✅ Thoroughly inspected & certified
✅ Transparent pricing & service history
✅ Finance & exchange options

🧰 Vehicle Servicing & Repairs
✅ Hyundai-certified technicians
✅ Genuine spare parts
✅ Quick turnaround & pickup-drop facility

🔧 Bodyshop & Insurance Claims
✅ Accident repairs & dent-paint services
✅ Hassle-free insurance claim assistance
✅ Cashless facility with major insurers

💰 Finance & Loan Assistance
✅ Tie-ups with top banks & NBFCs
✅ Best interest rates & fast approvals
✅ On-road pricing breakdown

🛡️ Car Insurance & Renewals
✅ Instant insurance quotes
✅ Renewal reminders
✅ Claim support from start to finish

🧾 RC Transfer & Documentation
✅ Ownership transfer assistance
✅ RTO support
✅ Documentation help for resale or exchange

Want to explore a service in detail?`,
          options: ["🛠️ Book a Service", "🚗 Browse Used Cars", "📞 Talk to Our Team", "🏠 Back to main menu"]
        };
      }

      if (userMessage.includes("Achievements") || userMessage.includes("Awards")) {
        return {
          message: `We're proud to be recognized for our commitment to excellence! 🏆✨

🌟 Sherpa Hyundai Achievements:
🏅 Best Customer Experience Dealer – South India (2023)
🏅 Top Performer in Certified Pre-Owned Sales (2022)
🏅 Highest Customer Satisfaction Score – Hyundai India (2021)
🏅 Hyundai Elite Partner Recognition – 3 Years in a Row

🎉 What These Awards Mean for You:
✅ Transparent & customer-friendly processes
✅ Consistent service excellence
✅ Trusted by thousands of happy customers

🧩 Our real achievement?
Your trust, referrals, and repeat visits — that’s what drives us every day! 🙌

Would you like to...`,
          options: ["📍 See Our Locations", "🎯 Explore Used Cars", "🏠 Back to main menu"]
        };
      }

      if (userMessage.includes("Back to main menu")) {
        session.step = 'main_menu';
        return {
          message: "Is there anything else I can help you with today?",
          options: returnToMenuOptions
        };
      }

      if (userMessage.includes("Book a Service")) {
        session.step = 'done';
        return { message: "Perfect! One of our executives will call back shortly. Thanks 😊" };
      }

      if (userMessage.includes("Browse")) {
        session.step = 'browse_start';
        return { message: "Redirecting to browse cars flow..." };
      }

      if (userMessage.includes("Contact")) {
        session.step = 'contact_menu';
        return { message: "Redirecting to contact our team..." };
      }

      return {
        message: "Please select an option to continue:",
        options: aboutUsMenu.concat(["🏠 Back to main menu"])
      };

    default:
      session.step = 'about_menu';
      return {
        message: "Welcome to Sherpa Hyundai! Here's what you'd like to know about us:",
        options: aboutUsMenu
      };
  }
}

module.exports = { handleAboutUsStep };
