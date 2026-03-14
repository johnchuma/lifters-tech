import { Volume2, Monitor, ShoppingBag, Music } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/work" },
  { label: "Testimonies", to: "/testimonies" },
  { label: "Contact", to: "/contact" },
];

export const SERVICES = [
  {
    id: "sound-rental",
    icon: Volume2,
    badge: "EVENT RENTALS",
    title: "Sound Systems",
    description:
      "Crystal-clear audio for concerts, corporate events, weddings and more. We deliver and set up professional-grade PA systems, subwoofers, and mixing consoles tailored to your venue.",
    image: "image16.jpeg",
    features: ["PA Systems", "Subwoofers", "Mixing Consoles", "Wireless Mics"],
  },
  {
    id: "led-rental",
    icon: Monitor,
    badge: "EVENT RENTALS",
    title: "LED Screens",
    description:
      "High-resolution LED screens and video walls that captivate every audience. Perfect for concerts, conferences, outdoor activations, and sports events of any scale.",
    image: "image6.jpeg",
    features: [
      "Indoor / Outdoor Screens",
      "Video Walls",
      "Stage Backdrops",
      "Live Feed Display",
    ],
  },
  {
    id: "sound-sales",
    icon: ShoppingBag,
    badge: "SOUND SALES",
    title: "Sound Equipment Sales",
    description:
      "Purchase premium audio equipment for your studio, church, or venue. We stock trusted brands with expert guidance to help you find the perfect match for your budget and needs.",
    image: "image19.jpeg",
    features: [
      "Speakers & Amplifiers",
      "Microphones",
      "Mixers & Interfaces",
      "Studio Monitors",
    ],
  },
  {
    id: "music-lessons",
    icon: Music,
    badge: "MUSIC LESSONS",
    title: "Music Lessons",
    description:
      "Professional music education delivered by experienced tutors. Whether you are a complete beginner or refining your craft, we offer tailored lessons across instruments and vocals.",
    image: "image22.jpeg",
    features: [
      "Guitar & Bass",
      "Piano & Keyboards",
      "Vocals & Singing",
      "Music Production",
    ],
  },
];

export const GALLERY = [
  "image5.jpeg",
  "image3.jpeg",
  "image4.jpeg",
  "image21.jpeg",
  "image7.jpeg",
  "image8.jpeg",
  "image12.jpeg",
  "image10.jpeg",
  "image11.jpeg",
  "image13.jpeg",
];

export const TESTIMONIALS = [
  {
    name: "James Kariuki",
    role: "Event Director, Nairobi Live Events",
    quote:
      "Lifters Tech transformed our outdoor concert into an unforgettable experience. The sound quality was impeccable from the front row all the way to the back of the crowd.",
    rating: 5,
    initials: "JK",
  },
  {
    name: "Amina Hassan",
    role: "Wedding Planner, Elegance Weddings",
    quote:
      "I have worked with many AV companies, but Lifters Tech stands out every single time. Their LED screens added a spectacular visual dimension to every wedding we've done together.",
    rating: 5,
    initials: "AH",
  },
  {
    name: "David Mwangi",
    role: "Youth Pastor, Restoration Church",
    quote:
      "We purchased our entire church sound system through Lifters Tech. The team guided us perfectly — the congregation is absolutely blown away every single Sunday.",
    rating: 5,
    initials: "DM",
  },
  {
    name: "Sandra Osei",
    role: "Music Student",
    quote:
      "The music lessons at Lifters Tech changed my life. My guitar instructor is patient, professional and incredibly talented. I progressed from beginner to performing live in just 6 months.",
    rating: 5,
    initials: "SO",
  },
];

export const STATS = [
  { value: "500+", label: "Events Powered" },
  { value: "8+", label: "Years Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "50+", label: "Students Trained" },
];
