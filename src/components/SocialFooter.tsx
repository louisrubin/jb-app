import tikTokIcon from "../assets/social/tik-tok.svg";
import instagramIcon from "../assets/social/instagram.svg";
import youtubeIcon from "../assets/social/youtube.svg";
import twitterIcon from "../assets/social/twitter.svg";

export default function SocialFooter() {

    return (
        <div id="social-footer" className="flex justify-center items-center 
            space-x-10 md:space-x-5 invert select-none">
			
            
            <a href="#" target="_blank" rel="noopener noreferrer">
			    <img src={tikTokIcon} className="hover:invert" />
			</a>

			<a href="#" target="_blank" rel="noopener noreferrer">
			    <img src={instagramIcon} className="hover:invert" />
			</a>

			<a href="#" target="_blank" rel="noopener noreferrer">
			    <img src={twitterIcon} className="hover:invert" />
			</a>
			
			<a href="#" target="_blank" rel="noopener noreferrer">
			    <img src={youtubeIcon} className="hover:invert" />
			</a>
			
		</div>
    );

}