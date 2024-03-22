import youtube from "@/public/project/youtube.png";
import portfolio from "@/public/project/portfolio.png";
import portfolio1 from "@/public/project/portfolio1.png";
import charity from "@/public/project/charity.jpg";
import photoDiscovery from "@/public/project/photo_discovery.png";

const projects = [
  {
    banner: youtube,
    title: "Video uploading platform like YouTube",
    tools: ["NextJS", "MongoDB", "Firebase Storage"],
    liveLink: "https://saitube.vercel.app/",
  },
  {
    banner: portfolio1,
    title: "Developer portfolio site",
    tools: ["NextJS"],
    liveLink: "https://sairaj-aftab.vercel.app/",
  },
  {
    banner: charity,
    title: "Charity Organization",
    tools: ["NextJS"],
    liveLink: "https://next-charity-organization.vercel.app/",
  },
  {
    banner: photoDiscovery,
    title: "Photo Discovery Web App",
    tools: ["ReactJS", "NodeJS", "Express", "MongoDB", "Cloudinary"],
    liveLink: "https://photo-discovery-web-app.onrender.com",
  },
];

export default projects;
