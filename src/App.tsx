import "./App.css";
import TextInput from "./components/TextInput";

function App() {
  return (
    <>
      <div className="relative min-h-screen md:overflow-hidden">
        <nav className="py-[1.5rem] px-[1rem] md:px-[1.5rem] header">
          <a className="" href="/">
            <svg
              viewBox="0 0 111 30"
              className="fill-[#e50914] w-[74px] h-[20px] md:w-[167px] md:h-[45px]"
              aria-hidden="true"
              focusable="false"
            >
              <g>
                <path
                  d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                  id="Fill-14"
                ></path>
              </g>
            </svg>
          </a>
        </nav>

        <div className="flex md:justify-center md:mb-[90px] mt-[12px]">
          <div className="w-full flex flex-col bg-[#000000BF] px-[1.5rem] pb-0 md:px-[4rem] md:pt-[4rem] md:pb-[6.5rem] md:max-w-[450px]">
            <div className="h-[370px]">
              <h1 className="text-white text-[32px] font-bold mb-[26px]">
                Sign In
              </h1>
              <form method="post">
                <TextInput name="email" label="Email or phone number" />
                <TextInput type="password" name="password" label="Password" />
                <button className="bg-[#E50914] text-white font-semibold w-full h-[48px] mt-[24px] mb-[12px] rounded-md">
                  Sign In
                </button>

                <div className="flex justify-between items-center text-[#B3B3B3] text-[13px]">
                  <div className="flex relative">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      id="rememberMe"
                      value="true"
                    />
                    <label className="ml-1 leading-3" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <a className="hover:underline" href="/">
                    Need help?
                  </a>
                </div>
              </form>
            </div>

            <div className="flex flex-col mt-[16px]">
              <div className="flex">
                <h1 className="text-[#737373]">New to Netflix?</h1>
                <a className="text-white ml-[5px] hover:underline" href="/">
                  Sign up now
                </a>
              </div>

              <div className="my-[13px] text-[#8C8C8C] text-[13px] w-full">
                <span>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </span>
                <a className="text-[#0071EB] ml-[5px] hover:underline" href="/">
                  Learn more.
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="h-full md:h-[174px] bg-[#000000BF] text-[#737373]">
          <div className="flex flex-col mx-[31px] md:mx-[93px] py-[30px] gap-y-8 footer">
            <a href="/" className="hover:underline">Question? Contact us.</a>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-[13px] gap-y-3">
              <a href="/" className="hover:underline">FAQ</a>
              <a href="/" className="hover:underline">Help Center</a>
              <a href="/" className="hover:underline">Term of Use</a>
              <a href="/" className="hover:underline">Privacy</a>
              <a href="/" className="hover:underline">Cookie Preferences</a>
              <a href="/" className="hover:underline">Corporate Information</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
