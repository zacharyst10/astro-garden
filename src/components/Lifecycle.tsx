export default function Lifecycle() {
  interface CardData {
    imgSrc: string;
    altText: string;
    title: string;
    subtitle: string;
    description: string;
  }

  const cardData: CardData[] = [
    {
      imgSrc: "/spinach.jpg",
      altText: "spinach",
      title: "Spinach",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/zucchini.jpg",
      altText: "zucchini",
      title: "Zucchini",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/cucumber.jpg",
      altText: "cucumber",
      title: "Cucumber",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/peppers.jpg",
      altText: "Peppers",
      title: "Peppers",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/garlic.jpg",
      altText: "garlic",
      title: "Garlic",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/celery.jpg",
      altText: "celery",
      title: "Celery",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/chives.jpg",
      altText: "Chives",
      title: "Chives",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/onion.jpg",
      altText: "Onion",
      title: "Onion",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/green-onion.jpg",
      altText: "green onion",
      title: "Green Onion",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/cilantro.jpg",
      altText: "Cilantro",
      title: "Cilantro",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/raspberry.jpg",
      altText: "Raspberry",
      title: "Raspberry",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/blueberry.jpg",
      altText: "Blueberry",
      title: "Blueberry",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/kale.jpg",
      altText: "Kale",
      title: "Kale",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/sage.jpg",
      altText: "Sage",
      title: "Sage",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/lettuce.jpg",
      altText: "Lettuce",
      title: "Lettuce",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/peas.jpg",
      altText: "Peas",
      title: "Peas",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/carrot.jpg",
      altText: "Carrots",
      title: "Carrots",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/tomato.jpg",
      altText: "Tomato",
      title: "Tomato",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/basil.jpg",
      altText: "Basil",
      title: "Basil",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/mint.jpg",
      altText: "Mint",
      title: "Mint",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/rosemary.jpg",
      altText: "Rosemary",
      title: "Rosemary",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      imgSrc: "/thyme.jpg",
      altText: "Thyme",
      title: "Thyme",
      subtitle: "poop eh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center">
      {cardData.map((card, index) => (
        <div key={index} className="flex p-4 mx-2 items-center justify-center">
          <div className="group h-48 w-32 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={card.imgSrc}
                  alt={card.altText}
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-xl font-bold">{card.title}</h1>
                  <p className="text-sm">{card.subtitle}</p>
                  <p className="text-sm">{card.description}</p>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
