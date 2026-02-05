module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://github.com/SP26-CS315-TanishaDowner/SP26-CS315-TanishaDowner.github.io`,
    // Your Name
    name: 'Tanisha Downer',
    // Main Site Title
    title: `Tanisha Downer | IT Information Help Desk`,
    // Description that goes under your name in main bio
    description: `Computer Science Major.`,
    // Optional: Twitter account handle
    author: `@tdowner93`,
    // Optional: Github account URL
    github: `https://github.com/downerT/tanishadowner`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/tanisha-downer-838730221/`,
    // Content of the About Me section
    about: `I’m a computer science student with a strong interest in building practical, user-friendly technology. I enjoy turning ideas into working solutions through programming, data analysis, and thoughtful design.I’ve worked on a range of projects—from web applications to hardware-based systems—that have helped me develop a solid foundation in software development and problem-solving. I’m especially interested in projects that combine logic, data, and real-world impact.As a college athlete, I bring discipline, teamwork, and persistence into everything I do. I’m always eager to learn new technologies, take on challenges, and grow as a developer..`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'AI Golf Simulator',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Breadboard Vending Machine',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://extensionkit.io/?ref=devfolio',
      },
      {
        name: 'Motion-Detecting Raspberry Pi Robot',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Eli Lilly & Company',
        description: 'Tech@Lilly Intern, June 2022 - August 2022',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'GCM Grovner',
        description: 'IT & Infrastcture Intern, June 2025 - August 2025',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Parrish Consulting Services',
        description: 'IT Ticket Workflow Manager, December 2025 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Python, HTML, C++, Node.js,',
      },
      {
        name: 'Databases',
        description: 'Django, PostreSQL, MySQL',
      },
      {
        name: 'Technical Skills',
        description:
          'Docker, API design, Power BI, Azure, On PREM, Servers, SolorWinds, PowerShell, Jira, ConnectWise PSA',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
