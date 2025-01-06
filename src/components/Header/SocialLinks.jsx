import { socialLinks } from "../../constants/Index";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex gap-3">
      {socialLinks.map((link) => (
        <a
          className="p-3 bg-gray-200 rounded-xl"
          key={link.id}
          href={link.url}
          target="_blank"
        >
          <div>{link.icon}</div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
