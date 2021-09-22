const contents = [
    {
        name:"What are ScorpFins?",
        description:"ScorpFins are the good generated NFTs on the Binance Smart Chain!",
        img:["/nft/launch-banner.gif"],
        extra: "Paying respect to its predecessors like CryptoPunks, of course, there will be Zombies, Apes, Aliens but wait! We didn't stop there. There are nearly endless combinations -- to spice up your ScorpFin for its own unique look.",
    },
    {
        name:"Specs",
        description:"Each ScorpFin is a programmatically generated 32x32 GIF enlarged to 320x320, stored as an ERC721 token on the Ethereum blockchain. Each one is unique, carefully crafted from more than 6 properties, and animated with 5 different frames at 150ms per frame. There will be a limited supply of 10000, and the pricing follows a bonding curve detailed below.",
        img:["/nft/1.gif", "/nft/2.gif", "/nft/3.gif"],
        extra: "",
    },
    {
        name:"A Good and ScorpFin Bonding Curve",
        description:"The purchase price increases with a bonding curve to create hype and FOMO reward early supporters so that more people will buy these Good little things. To build a community and encourage collecting and trading, we purposefully designed the curve to be competitive compared to other projects. By design, 75% of them are priced under 0.2 ETH, and the highest price is capped at 1 ETH.",
        extra: "",
    },
    {
        name:"Why get a NFT? Why get a ScorpFin?",
        description:"Take advantage of earning ScorFin tokens for using ScorpNFTracker. Real time tracking of your NFTs. Keep track of multiple wallets where your NFTs are stored",
        extra: "",
    },
    {
        name:"About Us",
        img:["/nft/69.png", "/nft/115.png"],
        extra: "Play to Earn revolution. A new type of game, partially owned and operated by its players. Earn ScorpFin tokens by playing and use them to decide the future of the game! We are working so hard to brings you the perfect version of ScorpGames Play-to-earn Game!",
    },
    {
        name:"FAQ",
    },
];
const faqs = [
    {
        name:"Buying NFT for the first time, how can I get started?",
        description:"Get a Metamask chrome extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase Pro or Paypal. Finally, click the button on the Sticky banner and approve the transaction on Metamask. Voila!",
    },
    {
        name:"Are ScorpFins a good investment?",
        description:"Well, first of all, ScorpFins are not Mona Lisas so... it depends. Use your own judgment. ScorpFins do have a bonding curve but please don’t spend your food money on this. Not financial advice. Check out above for Top 10 Reasons Why Getting a ScorpFin is the Best Decision You can Make in Your Life RIGHT NOW!",
    },
    {
        name:"How can I trade my ScorpFins?",
        description:"ScorpFins adhere to the ERC-721 standard so you can trade them on platforms like OpenSea.",
    },
    {
        name:"What can I do with my ScorpFins?",
        description:"You are free to do anything with them under a non-exclusive license.",
    },
    {
        name:"Feedback and purchase issues",
        description:"The price of the ScorpFins transaction is recorded at Metamask launch, so if the total number of ScorpFins supply changes during this time, leading to a price change, the transaction will fail due to a price check on the contract. If there are further issues, DM us on Twitter with your Etherscan transaction and we will be sure to take a look!",
    },
    {
        name:"How can I help?",
        description:"We are still in an early stage and still figuring things out. Really appreciate it if you help share this project!",
    },
    {
        name:"Future Plans",
        description:"TBD. At this point, ScorpFins are just tradable art like all the other NFTs. But we are working on more features for this site and might come up with creative ideas to make it more fun!",
    },
    {
        name:"Inspiration List",
        description:"ScorpFins are inspired by MANY things. While its not our intent to We have included a list of inspirations that we can think of below:",
    },
];
const hmm = {
    name:"Good, Good, ScorpFin, Good",
    description:"Hmmm.. What kind of ScorpFin will you get?",
    img:["/nft/4.gif", "/nft/5.gif", "/nft/6.gif", "/nft/7.gif", "/nft/8.gif", "/nft/9.gif",],
    extra: "",
};

export default function ScorpNFTtracker(){
    return (
        <section className="bg-sec p-20 lg:px-32 xl:px-48" id="contents">
            <h1 className="gr-text font-bold text-xl lg:text-2xl " data-aos="zoom-in">
                ScorpNFTracker</h1>
                <br />
                {/* contents */}
                {
                    contents.map(content=>(
                        <div className="flex flex-col justify-center my-8"
                        key={contents.indexOf(content)}
                        data-aos={
                        contents.indexOf(content)%2==0?
                        "fade-right":"fade-left"
                        }
                        >
                            <div className="text-left">
                                <h2 className="text-xl font-semibold">{content.name}</h2>
                                <p className="text-gray-400">{content.description}</p>
                            </div>
                            { content.img && <div className="flex flex-wrap">
                                    {  content.img.length==1? <img className="w-full" key={content.img} src={"/img/"+content.img} alt={content.name} />
                                        :
                                        content.img.map(image=><img className="w-4/12 p-3 max-w-max" key={image} src={"/img/"+image} alt={content.name} />)
                                    }
                                </div>
                            }
                            <div className="text-left">
                                <p className="text-gray-400">{content.extra}</p>
                            </div>
                        </div>
                    ))
                }
                {/* FAQ contents */}
                {
                    faqs.map(faq=>(
                        <div className="flex flex-col justify-center my-8"
                        key={contents.length+faqs.indexOf(faq)}
                        data-aos={
                        faqs.indexOf(faq)%2==0?
                        "fade-right":"fade-left"
                        }
                        >
                            
                            <div className="text-left">
                                <h4 className="text-x">{faq.name}</h4>
                                <p className="text-gray-400">{faq.description}</p>
                            </div>
                        </div>
                    ))
                }

                {/* hmm */}
                <div className="flex flex-col justify-center my-8"
                key={contents.length+faqs.length}
                data-aos={
                (contents.length+faqs.length)%2==0?
                "fade-right":"fade-left"
                }
                >
                    
                    <div className="text-left">
                        <h2 className="text-xl font-semibold">{hmm.name}</h2>
                        <p className="text-gray-400">{hmm.description}</p>
                    </div>
                    <div className="flex flex-wrap">
                        { hmm.img.map((image,i)=>(i+1)%3===0?<><img className="w-4/12 p-3 max-w-max" key={image} src={"/img/"+image} alt={hmm.name} /><br /></>:<img className="w-4/12 p-3 max-w-max" key={image} src={"/img/"+image} alt={hmm.name} />) }
                    </div>
                    <div className="text-left">
                        <p className="text-gray-400">{hmm.extra}</p>
                    </div>
                </div>
                </section>
            );
}