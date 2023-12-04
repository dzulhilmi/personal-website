import { Github, Instagram, Facebook, Linkedin } from "lucide-react";

const socialMediaList = [
  {
    type: "GITHUB",
    route: "https://github.com/dzulhilmi",
  },
  {
    type: "LINKEDIN",
    route: "https://www.linkedin.com/in/muhammad-dzulhilmi-045812141/",
  },
];

//TODO: will based from enum prisma
const SOCIAL_MEDIA = {
  GITHUB: "GITHUB",
  INSTAGRAM: "INSTAGRAM",
  FACEBOOK: "FACEBOOK",
  LINKEDIN: "LINKEDIN",
};

const socialMediaIconMap = {
  [SOCIAL_MEDIA.GITHUB]: <Github className="text-amber-500 transition" />,
  [SOCIAL_MEDIA.INSTAGRAM]: <Instagram className="text-rose-500 transition" />,
  [SOCIAL_MEDIA.FACEBOOK]: <Facebook className="text-blue-500 transition" />,
  [SOCIAL_MEDIA.LINKEDIN]: <Linkedin className="text-blue-500 transition" />,
};

export const SocialMedia = () => {
  return (
    <ul className="mt-8 flex items-center gap-5">
      {socialMediaList.map((socialMedia) => (
        <li key={socialMedia.type}>
          <a
            className="[&>svg]:hover:text-neutral-700 dark:[&>svg]:hover:text-white transition"
            href={socialMedia.route}
            target="_blank"
          >
            {socialMediaIconMap[socialMedia.type]}
          </a>
        </li>
      ))}
    </ul>
  );
};
