interface IProject {
  image: string;
  title: string;
  subTitle: string;
  description: string;
  frameworks: string[];
  websiteLink?: string;
  github?: string;
  invision?: string;
}

export const ListOfProjects: IProject[] = [
  {
    image: require("../assets/Einride.jpg"),
    title: "Einride",
    subTitle: "Frontend Developer",
    description:
      "Making transportaion more intelligent, safe, cost-effective and sustainable is a few of the things that the startup Einride strives towards. To achieve this feat they have developed their own autonomous, all-electrict transport vehicles called Pods. I was part of the team that helped to develop Einrides website, mainly as a Front end developer but I also contributet with UX-design",
    frameworks: ["React", "Gatsby", "GraphQL", "Wordpress", "Sketch"],
    websiteLink: "https://www.einride.tech/"
  },
  {
    image: require("../assets/nn.png"),
    title: "On Good Grounds",
    subTitle: "Frontend Developer & UX-designer",
    description:
      "The student association Norrlands nation needed to raise money for their upcoming renovation of their building and needed a website to share information regarding the project. The projekt was named 'På goda grunder' (On Good Grounds) and besides informing about the renovation it is also possible for people to send donations to the project. Designed the website using Photoshop and InVision and later on built the website using Preact, Typescript, Sass and Prismic.",
    frameworks: ["Preact", "TypeScript", "Sass", "Prismic", "Sketch"],
    websiteLink: "https://pagodagrunder.se/"
  },
  {
    image: require("../assets/Plants.png"),
    title: "Plants",
    subTitle: "UX-designer",
    description:
      "During a course in UX-design I developed an application for plant lovers. Information regarding the users needs was gathered through interviews with potential users and the result was analysed and made into a prototype. The design was iterated and improved by conducting user tests.",
    frameworks: ["Sketch", "InVision"],
    websiteLink: "https://invis.io/2JW0F5WB7TR#/405313816_Start"
  }
];
