import signInImage from "assets/images/sigin.jpg";
import AlertImage from "assets/images/Phone-Alert.png"
import ReminderImage from "assets/images/create-reminder.png"
import TrackingImage from "assets/images/tracking.jpg"
import AnalyticsImage from "assets/images/th (1).jpeg"
import ReportsImage from "assets/images/report.webp"



  export default [
    {
      title: "Explore Hydra's Core Features",
      description: "Discover how Hydra seamlessly integrates into your daily routine, empowering you to stay hydrated and healthy with a suite of specialized features.",
      items: [
        {
          image: signInImage, // Update the path as needed
          name: "SignIn/Login",
          route: "/signup",
          //route: "<Your desired route for SignIn/Login>",
        },
        {
          image: AlertImage, // Update the path as needed
          name: "Create Hydration Alerts",
          //route: "<Your desired route for Create Hydration Alerts>",
        },
        {
          image: ReminderImage, // Update the path as needed
          name: "Customizable Reminders",
          //route: "<Your desired route for Customizable Reminders>",
        },
        {
          image: TrackingImage, // Update the path as needed
          name: "Track Daily Intake",
          //route: "<Your desired route for Track Daily Intake>",
        },
        {
          image: AnalyticsImage, // Update the path as needed
          name: "Hydration Analytics",
          //route: "<Your desired route for Hydration Analytics>",
        },
        {
          image: ReportsImage, // Update the path as needed
          name: "Detailed Progress Reports",
          //route: "<Your desired route for Detailed Progress Reports>",
        },
      ],
    },
  ];