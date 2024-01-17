import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/2ezDVX9co2Y7phRI/scene.splinecode');


const Home = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start tracking-[normal] text-center text-29xl text-black font-gilda-display">
      <section className="self-stretch flex flex-col items-start justify-start relative gap-[10px] max-w-full h-screen text-left text-[64px] text-white font-dm-serif-display">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-screen object-cover"
          alt=""
          src="/rectangle-1@2x.png"
        />
        <header className="my-0 mx-[!important] sticky top-[0] left-[0px] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] w-full flex flex-row items-center justify-between py-5 px-[100px] box-border gap-[20px] z-[99] max-w-full text-left text-xl text-white font-gianna mq750:w-[935px] mq750:pl-[25px] mq750:pr-[25px] mq750:box-border mq1050:pl-[50px] mq1050:pr-[50px] mq1050:box-border">
          <div className="relative whitespace-nowrap">logo</div>
          <div className="w-[505px] flex flex-row items-start justify-start gap-[51px] max-w-full text-base font-gilda-display mq750:hidden mq750:gap-[25px]">
            <div className="relative capitalize">home</div>
            <div className="relative capitalize whitespace-nowrap">
              about us
            </div>
            <div className="w-[70px] flex flex-row items-center justify-between">
              <div className="relative capitalize">artists</div>
              <img
                className="relative w-[17px] h-[17px] overflow-hidden shrink-0"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className="relative">Exhibitions</div>
            <div className="relative">Shop</div>
          </div>
          <div className="w-[204px] flex flex-row items-start justify-start gap-[30px]">
            <button className="cursor-pointer py-2.5 px-[17px] bg-[transparent] box-border w-[81px] flex flex-row items-center justify-center border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-base font-gilda-display text-white text-left whitespace-nowrap">
                log in
              </div>
            </button>
            <button className="cursor-pointer py-2.5 px-[17px] bg-white flex-1 flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-base font-gilda-display text-black text-left">
                sign up
              </div>
            </button>
          </div>
        </header>
        <div className="my-0 mx-[!important]  absolute top-[223px] left-[103px] w-[] flex flex-col items-start justify-start gap-[30px] max-w-full z-[1]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit uppercase font-normal font-inherit mq450:text-19xl mq750:text-[51px]">
              Discover the beauty of our art
            </h1>
            <div className="relative text-base capitalize font-gilda-display inline-block w-[558px] max-w-full pr-5">
              Explore our collection of stunning artworks and immerse yourself
              in the world of creativity.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[22px]">
            <button className="cursor-pointer py-2.5 px-[29px] bg-[transparent] box-border w-[97px] flex flex-row items-center justify-center border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-base capitalize font-inter text-white text-left">
                view
              </div>
            </button>
            <button className="cursor-pointer py-2.5 px-[27px] bg-white flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-base capitalize font-inter text-black text-left">
                learn more
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[84px] pr-[3px] pl-0.5 box-border max-w-full text-left text-5xl text-gray-300 font-dm-serif-display mq450:pb-9 mq450:box-border mq1050:pb-[55px] mq1050:box-border">
        <div className="flex-1 bg-gray-100 h-[765px] overflow-hidden flex flex-row items-start justify-start py-20 px-[100px] box-border gap-[95px] max-w-full mq450:pt-[34px] mq450:pb-[34px] mq450:box-border mq750:gap-[24px] mq750:pl-[25px] mq750:pr-[25px] mq750:box-border mq1050:pt-[52px] mq1050:pb-[52px] mq1050:box-border mq1225:gap-[47px] mq1225:pl-[50px] mq1225:pr-[50px] mq1225:box-border">
          <div className="w-[534px] flex flex-col items-start justify-start gap-[54px] max-w-[calc(100%_-_705px)] shrink-0 mq750:gap-[27px] mq1050:hidden mq1050:max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-17xl text-black">
              <h1 className="m-0 self-stretch relative text-inherit uppercase font-normal font-inherit mq450:text-3xl mq750:text-10xl">
                Experience the Beauty of Art at Our Gallery
              </h1>
              <div className="relative text-base capitalize font-gilda-display inline-block w-[415px] max-w-full">
                Immerse yourself in a world of creativity and inspiration.
                Discover unique artworks that captivate your senses and ignite
                your imagination.
              </div>
            </div>
            <div className="w-[281px] flex flex-col items-start justify-start gap-[20px]">
              <h3 className="m-0 relative text-inherit uppercase font-normal font-inherit mq450:text-lgi">
                uncover
              </h3>
              <div className="self-stretch relative text-base capitalize font-gilda-display text-black">
                Hidden Gems and Masterpieces That Tell Stories and Evoke
                Emotions
              </div>
            </div>
            <div className="w-[281px] flex flex-col items-start justify-start gap-[20px]">
              <h3 className="m-0 relative text-inherit uppercase font-normal font-inherit mq450:text-lgi">
                Experience
              </h3>
              <div className="self-stretch relative text-base capitalize font-gilda-display text-black">
                Art that Transcends Boundaries and Inspires Your Creative
                Journey
              </div>
            </div>
          </div>
          <img
            className="flex-1 relative rounded-[10px] max-w-[calc(100%_-_629px)] overflow-hidden h-[648px] object-cover mq1050:hidden mq1050:max-w-full"
            loading="eager"
            alt=""
            src="/rectangle-2@2x.png"
          />
        </div>
      </section>
      <section className="w-[1280px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[30px] min-h-[1209px] max-w-full text-left text-8xl-1 text-black font-gilda-display">
        <div className="flex flex-col items-start justify-start gap-[20px] min-h-[151px] max-w-full text-base">
          <div className="relative capitalize">discover</div>
          <h1 className="m-0 relative text-17xl capitalize font-normal font-dm-serif-display mq450:text-3xl mq750:text-10xl">
            Artwork
          </h1>
          <div className="relative text-xl capitalize mq450:text-base">
            Explore a curated selection of beautiful art pieces.
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[10px] grid-cols-[repeat(4,_minmax(231px,_1fr))] mq450:grid-cols-[minmax(231px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(231px,_400px))]">
          <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0 text-7xl-8">
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[2.98px]">
              <div className="self-stretch flex flex-row items-center justify-center">
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-[335.3px] object-cover"
                  loading="eager"
                  alt=""
                  src="/rectangle-3@2x.png"
                />
              </div>
              <div className="relative capitalize mq450:text-2xl">
                Sunset Painting
              </div>
              <div className="relative text-mini-9 capitalize">original</div>
              <div className="relative text-mid-9 capitalize whitespace-nowrap">
                $250
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-center justify-center py-[7.45033073425293px] px-[14.90066146850586px] border-[0.7px] border-solid border-black">
                  <div className="relative text-mini-9 capitalize font-gilda-display text-black text-left">
                    add to cart
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0 text-7xl-9">
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[2.99px]">
              <div className="self-stretch flex flex-row items-center justify-center">
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-[336px] object-cover"
                  loading="eager"
                  alt=""
                  src="/rectangle-3-1@2x.png"
                />
              </div>
              <div className="relative capitalize mq450:text-3xl">
                Brazil streets
              </div>
              <div className="relative text-mini-9 capitalize">original</div>
              <div className="relative text-mid-9 capitalize whitespace-nowrap">
                $250
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-center justify-center py-[7.466887474060059px] px-[14.933774948120117px] border-[0.7px] border-solid border-black">
                  <div className="relative text-mini-9 capitalize font-gilda-display text-black text-left">
                    add to cart
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[3.01px]">
            <div className="self-stretch flex flex-row items-center justify-center">
              <img
                className="flex-1 relative max-w-full overflow-hidden h-[338.2px] object-cover"
                loading="eager"
                alt=""
                src="/rectangle-3-2@2x.png"
              />
            </div>
            <div className="relative capitalize mq450:text-3xl">
              china streets
            </div>
            <div className="relative text-mini capitalize">original</div>
            <div className="relative text-lg capitalize whitespace-nowrap">
              $250
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-center justify-center py-[7.516556262969971px] px-[15.033112525939941px] border-[0.8px] border-solid border-black">
                <div className="relative text-mini capitalize font-gilda-display text-black text-left">
                  add to cart
                </div>
              </div>
            </button>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[3.01px]">
            <div className="self-stretch flex flex-row items-center justify-center">
              <img
                className="flex-1 relative max-w-full overflow-hidden h-[338.2px] object-cover"
                loading="eager"
                alt=""
                src="/rectangle-3-3@2x.png"
              />
            </div>
            <div className="relative capitalize mq450:text-3xl">
              china streets
            </div>
            <div className="relative text-mini capitalize">original</div>
            <div className="relative text-lg capitalize whitespace-nowrap">
              $250
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-center justify-center py-[7.516556262969971px] px-[15.033112525939941px] border-[0.8px] border-solid border-black">
                <div className="relative text-mini capitalize font-gilda-display text-black text-left">
                  add to cart
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[10px] grid-cols-[repeat(4,_minmax(231px,_1fr))] mq450:grid-cols-[minmax(231px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(231px,_400px))]">
          <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0 text-7xl-8">
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[2.98px]">
              <div className="self-stretch flex flex-row items-center justify-center">
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-[335.3px] object-cover"
                  loading="eager"
                  alt=""
                  src="/rectangle-3-4@2x.png"
                />
              </div>
              <div className="relative capitalize mq450:text-2xl">
                Sunset Painting
              </div>
              <div className="relative text-mini-9 capitalize">original</div>
              <div className="relative text-mid-9 capitalize whitespace-nowrap">
                $250
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-center justify-center py-[7.45033073425293px] px-[14.90066146850586px] border-[0.7px] border-solid border-black">
                  <div className="relative text-mini-9 capitalize font-gilda-display text-black text-left">
                    add to cart
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0 text-7xl-9">
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[2.99px]">
              <div className="self-stretch flex flex-row items-center justify-center">
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-[336px] object-cover"
                  loading="eager"
                  alt=""
                  src="/rectangle-3-1@2x.png"
                />
              </div>
              <div className="relative capitalize mq450:text-3xl">
                Brazil streets
              </div>
              <div className="relative text-mini-9 capitalize">original</div>
              <div className="relative text-mid-9 capitalize whitespace-nowrap">
                $250
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-center justify-center py-[7.466887474060059px] px-[14.933774948120117px] border-[0.7px] border-solid border-black">
                  <div className="relative text-mini-9 capitalize font-gilda-display text-black text-left">
                    add to cart
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[3.01px]">
            <div className="self-stretch flex flex-row items-center justify-center">
              <img
                className="flex-1 relative max-w-full overflow-hidden h-[338.2px] object-cover"
                loading="eager"
                alt=""
                src="/rectangle-3-2@2x.png"
              />
            </div>
            <div className="relative capitalize mq450:text-3xl">
              china streets
            </div>
            <div className="relative text-mini capitalize">original</div>
            <div className="relative text-lg capitalize whitespace-nowrap">
              $250
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-center justify-center py-[7.516556262969971px] px-[15.033112525939941px] border-[0.8px] border-solid border-black">
                <div className="relative text-mini capitalize font-gilda-display text-black text-left">
                  add to cart
                </div>
              </div>
            </button>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[3.01px]">
            <div className="self-stretch flex flex-row items-center justify-center">
              <img
                className="flex-1 relative max-w-full overflow-hidden h-[338.2px] object-cover"
                loading="eager"
                alt=""
                src="/rectangle-3-3@2x.png"
              />
            </div>
            <div className="relative capitalize mq450:text-3xl">
              china streets
            </div>
            <div className="relative text-mini capitalize">original</div>
            <div className="relative text-lg capitalize whitespace-nowrap">
              $250
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-center justify-center py-[7.516556262969971px] px-[15.033112525939941px] border-[0.8px] border-solid border-black">
                <div className="relative text-mini capitalize font-gilda-display text-black text-left">
                  add to cart
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
      <button className="cursor-pointer [border:none] py-0 px-5 bg-[transparent] h-[158px] flex flex-row items-start justify-start box-border gap-[6px]">
        <div className="relative text-mini capitalize font-gilda-display text-black text-left">
          view all
        </div>
        <img
          className="relative w-[17px] h-[17px] overflow-hidden shrink-0"
          alt=""
          src="/arrownarrowright.svg"
        />
      </button>
      <section className="w-[1284px] flex flex-row items-start justify-start py-0 pr-[29px] pl-5 box-border min-h-[1243px] max-w-full text-left text-mini text-black font-manrope">
        <div className="flex-1 flex flex-col items-end justify-start gap-[71px] max-w-full mq450:gap-[18px] mq750:gap-[35px]">
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[10px] max-w-full">
            <div className="flex-1 relative h-[552px] min-w-[396px] max-w-full mq750:min-w-full">
              <img
                className="absolute top-[52px] left-[0px] w-[610px] h-[500px] object-cover"
                loading="eager"
                alt=""
                src="/rectangle-4@2x.png"
              />
              <img
                className="absolute top-[3px] left-[52px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/chevronright.svg"
              />
              <div className="absolute top-[0px] left-[72px] capitalize">
                category
              </div>
              <img
                className="absolute top-[3px] left-[142px] w-[15px] h-[15px] overflow-hidden"
                alt=""
                src="/chevronright.svg"
              />
              <div className="absolute top-[0px] left-[162px] capitalize">
                artwork
              </div>
              <div className="absolute top-[-2402px] left-[48px] w-0 h-0 flex flex-row items-start justify-start">
                <div className="absolute my-0 mx-[!important] top-[2402px] left-[-53px] capitalize">
                  view all
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border min-w-[396px] max-w-full mq750:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[192px]">
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-[241px] shrink-0 object-cover"
                    loading="eager"
                    alt=""
                    src="/rectangle-5@2x.png"
                  />
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-[241px] shrink-0 object-cover"
                    loading="eager"
                    alt=""
                    src="/rectangle-6@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[192px]">
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-[241px] shrink-0 object-cover"
                    loading="eager"
                    alt=""
                    src="/rectangle-8@2x.png"
                  />
                  <div className="self-stretch h-[241px] flex flex-row items-end justify-end py-[23px] px-6 box-border bg-[url('/public/rectangle-7@2x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="relative w-[295px] h-[241px] object-cover hidden"
                      alt=""
                      src="/rectangle-7@2x.png"
                    />
                    <button className="cursor-pointer py-[5px] pr-1.5 pl-[9px] bg-gray-200 [backdrop-filter:blur(4px)] flex flex-row items-center justify-center whitespace-nowrap z-[1] border-[1px] border-solid border-white hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                      <div className="relative text-mini capitalize font-light font-manrope text-white text-left">
                        view all photos
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[22px] max-w-full font-gilda-display">
            <div className="flex-1 flex flex-col items-start justify-center gap-[20px] min-w-[396px] max-w-full mq750:min-w-full">
              <h1 className="m-0 self-stretch relative text-21xl capitalize font-normal font-dm-serif-display mq450:text-5xl mq750:text-13xl">
                Sunset Painting
              </h1>
              <div className="self-stretch flex flex-col items-start justify-center gap-[10px] max-w-full">
                <div className="relative capitalize inline-block w-[635px] max-w-[104%] shrink-0">
                  Discover the beauty of this artwork.
                </div>
                <div className="relative capitalize inline-block w-[630px] max-w-[103%] shrink-0">
                  <ul className="m-0 font-inherit text-inherit pl-5">
                    <li className="mb-0">
                      Limited edition artwork available now.
                    </li>
                    <li className="mb-0">
                      Perfect addition to your art collection.
                    </li>
                    <li>Handcrafted with precision and care.</li>
                  </ul>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[10px] max-w-full">
                <div className="w-[630px] flex flex-row items-start justify-start gap-[10px] max-w-[103%] shrink-0 mq450:flex-wrap">
                  <div className="flex flex-row items-center justify-center py-[5px] px-0 border-b-[1px] border-solid border-black">
                    <div className="relative capitalize">details</div>
                  </div>
                  <div className="flex flex-row items-center justify-center py-[5px] px-0">
                    <div className="relative capitalize">shipping</div>
                  </div>
                  <div className="flex flex-row items-center justify-center py-[5px] px-0">
                    <div className="relative capitalize">returns</div>
                  </div>
                </div>
                <div className="relative capitalize text-gray-300 inline-block w-[632px] max-w-[104%] shrink-0">
                  Learn more about the artwork and its inspiration.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[392px] max-w-full text-xl mq750:min-w-full">
              <div className="relative text-21xl capitalize font-dm-serif-display whitespace-nowrap mq450:text-5xl mq750:text-13xl">
                $55
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[1px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
                    loading="eager"
                    alt=""
                    src="/materialsymbolslightstar.svg"
                  />
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
                    loading="eager"
                    alt=""
                    src="/materialsymbolslightstar.svg"
                  />
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
                    loading="eager"
                    alt=""
                    src="/materialsymbolslightstar.svg"
                  />
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/materialsymbolslightstar.svg"
                  />
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/materialsymbolslightstarhalfoutline.svg"
                  />
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 hidden min-h-[24px]"
                    alt=""
                  />
                </div>
                <div className="relative capitalize mq450:text-base">
                  (4.5 stars) • 10 reviews
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <div className="relative capitalize mq450:text-base">
                  Variant
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq750:flex-wrap">
                  <button className="cursor-pointer p-2.5 bg-[transparent] flex-1 box-border flex flex-row items-center justify-center min-w-[125px] border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
                    <div className="relative text-xl capitalize font-gilda-display text-black text-left mq450:text-base">
                      option one
                    </div>
                  </button>
                  <button className="cursor-pointer p-2.5 bg-[transparent] flex-1 box-border flex flex-row items-center justify-center min-w-[125px] border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
                    <div className="relative text-xl capitalize font-gilda-display text-black text-left mq450:text-base">
                      option two
                    </div>
                  </button>
                  <button className="cursor-pointer p-2.5 bg-[transparent] flex-1 box-border flex flex-row items-center justify-center min-w-[125px] border-[1px] border-solid border-gray-300 hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
                    <div className="relative text-xl capitalize font-gilda-display text-gray-300 text-left mq450:text-base">
                      option three
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="relative capitalize mq450:text-base">
                  quantity
                </div>
                <div className="flex flex-row items-center justify-center gap-[15px] font-dm-serif-display">
                  <div className="rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-11 h-11 flex flex-row items-start justify-start p-2.5 box-border">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      loading="eager"
                      alt=""
                      src="/plus.svg"
                    />
                  </div>
                  <div className="relative capitalize mq450:text-base">1</div>
                  <div className="rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-11 h-11 flex flex-row items-start justify-start p-2.5 box-border">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/minus.svg"
                    />
                  </div>
                </div>
              </div>
              <button className="cursor-pointer py-2.5 px-10 bg-[transparent] self-stretch flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
                <div className="relative text-xl capitalize font-gilda-display text-black text-left mq450:text-base">
                  add to cart
                </div>
              </button>
              <button className="cursor-pointer py-2.5 px-10 bg-[transparent] self-stretch flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
                <div className="relative text-xl capitalize font-gilda-display text-black text-left mq450:text-base">
                  buy now
                </div>
              </button>
              <div className="relative capitalize mq450:text-base">{`enjoy shipping `}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-center justify-center py-0 px-0.5 box-border max-w-full text-left text-21xl text-black font-dm-serif-display">
        <div className="flex-1 bg-white flex flex-col items-start justify-start py-[100px] pr-[110px] pl-[100px] box-border relative gap-[40px] min-h-[1024px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[20px] mq750:py-[65px] mq750:pr-[55px] mq750:pl-[50px] mq750:box-border">
          <h1 className="m-0 relative text-inherit capitalize font-normal font-inherit mq450:text-5xl mq750:text-13xl">
            testimonial
          </h1>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start relative gap-[20px] min-h-[433px] max-w-full text-xs-9 font-gilda-display">
            <div className="w-[605px] flex flex-row items-center justify-start gap-[10px] max-w-full mq750:flex-wrap">
              <img
                className="relative w-[218.7px] h-[206.8px] object-cover mq750:flex-1"
                loading="eager"
                alt=""
                src="/rectangle-9@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[7.44px] min-w-[244px] max-w-full">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-4.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-5.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-6.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-7.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstarhalfoutline-1.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 hidden min-h-[18px]"
                    alt=""
                  />
                </div>
                <div className="self-stretch relative capitalize">
                  The art gallery exceeded my expectations. The quality of the
                  artwork is exceptional.
                </div>
                <div className="h-[33px] flex flex-col items-start justify-start gap-[3.72px] font-dm-serif-display">
                  <div className="relative capitalize">john doe</div>
                  <div className="relative capitalize font-gilda-display">
                    Art Enthusiast
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[605px] flex flex-row items-center justify-start gap-[10px] max-w-full mq750:flex-wrap">
              <img
                className="relative w-[218.7px] h-[206.8px] object-cover mq750:flex-1"
                loading="eager"
                alt=""
                src="/rectangle-9-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[7.44px] min-w-[244px] max-w-full">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-8.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-9.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-10.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-11.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstarhalfoutline-2.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 hidden min-h-[18px]"
                    alt=""
                  />
                </div>
                <div className="self-stretch relative capitalize">
                  The art gallery exceeded my expectations. The quality of the
                  artwork is exceptional.
                </div>
                <div className="h-[33px] flex flex-col items-start justify-start gap-[3.72px] font-dm-serif-display">
                  <div className="relative capitalize">john doe</div>
                  <div className="relative capitalize font-gilda-display">
                    Art Enthusiast
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[605px] flex flex-row items-center justify-start gap-[10px] max-w-full mq750:flex-wrap">
              <img
                className="relative w-[218.7px] h-[206.8px] object-cover mq750:flex-1"
                alt=""
                src="/rectangle-9-2@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[7.44px] min-w-[244px] max-w-full">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-12.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-13.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-14.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-15.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstarhalfoutline-3.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 hidden min-h-[18px]"
                    alt=""
                  />
                </div>
                <div className="self-stretch relative capitalize">
                  The art gallery exceeded my expectations. The quality of the
                  artwork is exceptional.
                </div>
                <div className="h-[33px] flex flex-col items-start justify-start gap-[3.72px] font-dm-serif-display">
                  <div className="relative capitalize">john doe</div>
                  <div className="relative capitalize font-gilda-display">
                    Art Enthusiast
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[605px] flex flex-row items-center justify-start gap-[10px] max-w-full mq750:flex-wrap">
              <img
                className="relative w-[218.7px] h-[206.8px] object-cover mq750:flex-1"
                loading="eager"
                alt=""
                src="/rectangle-9-3@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[7.44px] min-w-[244px] max-w-full">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    loading="eager"
                    alt=""
                    src="/materialsymbolslightstar-16.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-17.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-18.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-19.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstarhalfoutline-4.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 hidden min-h-[18px]"
                    alt=""
                  />
                </div>
                <div className="self-stretch relative capitalize">
                  The art gallery exceeded my expectations. The quality of the
                  artwork is exceptional.
                </div>
                <div className="h-[33px] flex flex-col items-start justify-start gap-[3.72px] font-dm-serif-display">
                  <div className="relative capitalize">john doe</div>
                  <div className="relative capitalize font-gilda-display">
                    Art Enthusiast
                  </div>
                </div>
              </div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[453.6px] left-[0px] w-[] flex flex-row items-center justify-start gap-[10px] max-w-full mq750:flex-wrap">
              <img
                className="relative w-[218.7px] h-[206.8px] object-cover mq750:flex-1"
                loading="eager"
                alt=""
                src="/rectangle-9-4@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[7.44px] min-w-[244px] max-w-full">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-20.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-21.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-22.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-23.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstarhalfoutline-5.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 hidden min-h-[18px]"
                    alt=""
                  />
                </div>
                <div className="self-stretch relative capitalize">
                  The art gallery exceeded my expectations. The quality of the
                  artwork is exceptional.
                </div>
                <div className="h-[33px] flex flex-col items-start justify-start gap-[3.72px] font-dm-serif-display">
                  <div className="relative capitalize">john doe</div>
                  <div className="relative capitalize font-gilda-display">
                    Art Enthusiast
                  </div>
                </div>
              </div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[453.6px] left-[625.1px] w-[] flex flex-row items-center justify-start gap-[10px] max-w-full mq750:flex-wrap">
              <img
                className="relative w-[218.7px] h-[206.8px] object-cover mq750:flex-1"
                loading="eager"
                alt=""
                src="/rectangle-9-5@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[7.44px] min-w-[244px] max-w-full">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-24.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-25.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-26.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstar-27.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/materialsymbolslightstarhalfoutline-6.svg"
                  />
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 hidden min-h-[18px]"
                    alt=""
                  />
                </div>
                <div className="self-stretch relative capitalize">
                  The art gallery exceeded my expectations. The quality of the
                  artwork is exceptional.
                </div>
                <div className="h-[33px] flex flex-col items-start justify-start gap-[3.72px] font-dm-serif-display">
                  <div className="relative capitalize">john doe</div>
                  <div className="relative capitalize font-gilda-display">
                    Art Enthusiast
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute right-[245px] bottom-[117px] rounded-31xl bg-white box-border w-11 h-11 flex flex-row items-center justify-center py-2.5 px-[9px] z-[1] border-[1px] border-solid border-black">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/arrownarrowleft.svg"
            />
          </div>
          <div className="my-0 mx-[!important] absolute right-[185px] bottom-[117px] rounded-31xl bg-white box-border w-11 h-11 flex flex-row items-center justify-center py-2.5 px-[9px] z-[1] border-[1px] border-solid border-black">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/arrownarrowright-1.svg"
            />
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-36 box-border max-w-full text-left text-29xl text-black font-dm-serif-display mq750:pb-[94px] mq750:box-border">
        <div className="flex-1 bg-white overflow-hidden flex flex-row items-center justify-center py-[100px] px-5 box-border gap-[20px] max-w-full z-[1] mq750:pt-[65px] mq750:pb-[65px] mq750:box-border mq1225:flex-wrap mq1225:justify-center">
          <div className="w-[614px] flex flex-col items-start justify-start gap-[27px] min-w-[614px] max-w-full mq750:min-w-full mq1225:flex-1">
            <h1 className="m-0 relative text-inherit capitalize font-normal font-inherit inline-block w-[509px] max-w-full mq450:text-10xl mq750:text-19xl">
              Discover the Latest Art Collection
            </h1>
            <div className="self-stretch relative text-base capitalize font-gilda-display">
              Stay updated with our exclusive gallery updates and receive
              special offers.
            </div>
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <button className="cursor-pointer py-2.5 px-[17px] bg-[transparent] box-border w-[98px] flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
                <div className="relative text-base capitalize font-gilda-display text-black text-left whitespace-nowrap">
                  sign up
                </div>
              </button>
              <button className="cursor-pointer py-2.5 px-[17px] bg-black flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-darkslategray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
                <div className="relative text-base capitalize font-gilda-display text-white text-left mix-blend-difference">
                  learn more
                </div>
              </button>
            </div>
          </div>
          <img
            className="relative max-h-full w-[610px] object-cover max-w-full mq1225:flex-1"
            loading="eager"
            alt=""
            src="/rectangle-10@2x.png"
          />
        </div>
      </section>
      <div className="w-[697px] flex flex-row items-start justify-start pt-0 px-5 pb-[196px] box-border max-w-full mq450:pb-[127px] mq450:box-border">
        <div className="flex-1 flex flex-col items-center justify-center gap-[20px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit capitalize font-normal font-dm-serif-display mq450:text-10xl mq750:text-19xl">
            Stay Informed About New Art
          </h1>
          <div className="self-stretch relative text-base capitalize">
            Sign up for our newsletter to receive updates on new art and
            upcoming events.
          </div>
          <div className="w-[529px] flex flex-row flex-wrap items-start justify-center gap-[20px] max-w-full">
            <div className="flex-1 box-border flex flex-row items-center justify-start py-2.5 px-5 min-w-[142px] max-w-full border-[1px] border-solid border-black">
              <input
                className="w-full [border:none] [outline:none] font-gilda-display text-base bg-[transparent] relative capitalize text-gray-300 text-left inline-block"
                placeholder="your email address"
                type="text"
              />
            </div>
            <button className="cursor-pointer py-2.5 px-[17px] bg-black flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-darkslategray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="relative text-base capitalize font-gilda-display text-white text-left mix-blend-difference">
                join now
              </div>
            </button>
          </div>
          <div className="relative text-[12px] capitalize text-left">
            By joining, you agree to our Terms and Conditions.
          </div>
        </div>
      </div>
      <section className="w-[1280px] flex flex-row items-start justify-start pt-0 px-5 pb-[51px] box-border max-w-full text-left text-29xl text-black font-dm-serif-display mq750:pb-[33px] mq750:box-border">
        <div className="flex-1 flex flex-col items-center justify-start gap-[100px] max-w-full mq450:gap-[25px] mq750:gap-[50px]">
          <div className="flex flex-col items-center justify-start gap-[20px] max-w-full">
            <h1 className="m-0 relative text-inherit capitalize font-normal font-inherit mq450:text-10xl mq750:text-19xl">
              Get in Touch
            </h1>
            <div className="relative text-base capitalize font-gilda-display text-center">
              Contact us for inquiries, viewings, or purchases.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full text-center text-base font-gilda-display">
            <div className="flex-1 flex flex-col items-center justify-start py-5 px-0 box-border gap-[40px] min-w-[300px] max-w-full mq450:gap-[20px]">
              <img
                className="relative w-[100px] h-[100px] overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/mail01.svg"
              />
              <h1 className="m-0 relative text-29xl capitalize font-normal font-dm-serif-display text-left mq450:text-10xl mq750:text-19xl">
                Email
              </h1>
              <div className="relative capitalize inline-block max-w-full">
                Send us an email for any questions or requests.
              </div>
              <div className="relative capitalize whitespace-nowrap">
                hello@artgallery.com
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-start py-5 px-0 box-border gap-[40px] min-w-[300px] max-w-full mq450:gap-[20px]">
              <img
                className="relative w-[100px] h-[100px]"
                loading="eager"
                alt=""
                src="/phone.svg"
              />
              <h1 className="m-0 relative text-29xl capitalize font-normal font-dm-serif-display text-left mq450:text-10xl mq750:text-19xl">
                Phone
              </h1>
              <div className="relative capitalize">
                Give us a call to discuss your art needs.
              </div>
              <div className="relative capitalize">+250 (788) 123-4567</div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-start py-5 px-0 box-border gap-[40px] min-w-[300px] max-w-full mq450:gap-[20px]">
              <img
                className="relative w-[100px] h-[100px]"
                loading="eager"
                alt=""
                src="/markerpin01.svg"
              />
              <h1 className="m-0 relative text-29xl capitalize font-normal font-dm-serif-display text-left mq450:text-10xl mq750:text-19xl">
                Office
              </h1>
              <div className="relative capitalize inline-block max-w-full">
                Visit our office to see our collection in person.
              </div>
              <div className="relative capitalize">
                123 Art St, Sydney NSW 2000 AU
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-end justify-start py-16 pr-[89px] pl-[100px] box-border gap-[191px] max-w-full text-left text-xl text-black font-dm-serif-display mq450:gap-[48px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[95px] mq750:py-5 mq750:pr-11 mq750:pl-[50px] mq750:box-border mq1225:pt-[27px] mq1225:pb-[27px] mq1225:box-border">
        <div className="w-[1116px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[35px]">
            <div className="relative capitalize mq450:text-base">About Us</div>
            <div className="flex flex-col items-start justify-start gap-[15px] text-sm font-gilda-display">
              <div className="relative capitalize">Exhibition</div>
              <div className="relative capitalize">Artists</div>
              <div className="relative capitalize">Events</div>
              <div className="relative capitalize">Contact Us</div>
              <div className="relative capitalize">Shop</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[35px]">
            <div className="relative capitalize mq450:text-base">Blog</div>
            <div className="flex flex-col items-start justify-start gap-[15px] text-sm font-gilda-display">
              <div className="relative capitalize">Terms of Use</div>
              <div className="relative capitalize">Privacy Policy</div>
              <div className="relative capitalize inline-block w-[42px]">
                FAQ
              </div>
              <div className="relative capitalize">Shipping</div>
              <div className="relative capitalize">Returns</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[35px]">
            <div className="relative capitalize mq450:text-base">
              Terms of Sale
            </div>
            <div className="flex flex-col items-start justify-start gap-[15px] text-sm font-gilda-display">
              <div className="relative capitalize">Payment Methods</div>
              <div className="relative capitalize">Customer Support</div>
              <div className="relative capitalize">Track Order</div>
              <div className="relative capitalize">Shipping Policy</div>
              <div className="relative capitalize">Return Policy</div>
            </div>
          </div>
          <div className="w-[481px] flex flex-col items-start justify-start gap-[20px] max-w-full font-gilda-display">
            <div className="relative capitalize font-dm-serif-display mq450:text-base">
              Subscribe
            </div>
            <div className="relative text-sm capitalize inline-block max-w-full">
              Join our community to receive updates on new exhibitions and
              artists.
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap">
              <div className="flex-1 box-border flex flex-row items-center justify-start py-[9.230769157409668px] px-[18.461538314819336px] min-w-[131px] min-h-[40px] max-w-full border-[0.9px] border-solid border-black">
                <input
                  className="w-full [border:none] [outline:none] font-gilda-display text-mini-8 bg-[transparent] relative capitalize text-gray-300 text-left inline-block"
                  placeholder="your email address"
                  type="text"
                />
              </div>
              <button className="cursor-pointer py-[9.230769157409668px] px-4 bg-black box-border h-10 flex flex-row items-center justify-center whitespace-nowrap border-[0.9px] border-solid border-black hover:bg-darkslategray-100 hover:box-border hover:border-[0.9px] hover:border-solid hover:border-darkslategray-100">
                <div className="relative text-mini-8 capitalize font-gilda-display text-white text-left mix-blend-difference">
                  join now
                </div>
              </button>
            </div>
            <div className="relative text-[10px] capitalize text-gray-300 inline-block max-w-full">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our gallery.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full text-center text-base font-gilda-display mq1225:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[50px] max-w-full mq750:gap-[25px] mq1050:flex-wrap">
            <div className="relative capitalize">
              © 2023 Art Gallery. All rights reserved.
            </div>
            <div className="relative [text-decoration:underline] capitalize">
              Privacy Policy
            </div>
            <div className="relative [text-decoration:underline] capitalize">
              Terms of Use
            </div>
            <div className="relative [text-decoration:underline] capitalize">
              Cookie Policy
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
              loading="eager"
              alt=""
              src="/icbaselinefacebook.svg"
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
              loading="eager"
              alt=""
              src="/mdiinstagram.svg"
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
              loading="eager"
              alt=""
              src="/pajamastwitter.svg"
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
              loading="eager"
              alt=""
              src="/mdilinkedin.svg"
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
              loading="eager"
              alt=""
              src="/biyoutube.svg"
            />
          </div>
        </div>
        {/* <img
          className="relative max-h-full w-[448px] overflow-hidden max-w-full"
          loading="eager"
          alt=""
          src="/fabrandslinkedin.svg"
        />
        <img
          className="relative max-h-full w-[1024px] overflow-hidden max-w-full"
          loading="eager"
          alt=""
          src="/antdesignlinkedinfilled.svg"
        /> */}
      </section>
    </div>
  );
};

export default Home;
