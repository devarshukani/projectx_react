import React from "react";

const LeaderBoardList = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto overflow-x-hidden">
      {/* Backdrop */}
      <div className="fixed bg-[#d2d2d2] opacity-50 inset-0 backdrop-blur-sm"></div>

      {/* Scrollable content container */}
      <div className="relative bg-gray-200 rounded-[38.15px] overflow-y-auto max-h-[90vh] w-[981px] overflow-x-hidden">
        {/* Your existing content */}
        <div className="w-72 h-7 left-[36px] top-[66px] absolute justify-start text-zinc-800 text-2xl font-semibold font-['Open_Sans']">
          Master UG Medical Test
        </div>

        <div className="w-[981px] h-[1736px] relative bg-gray-200 rounded-[38.15px] overflow-auto">
          <div className="w-72 h-7 left-[36px] top-[66px] absolute justify-start text-zinc-800 text-2xl font-semibold font-['Open_Sans']">
            Master UG Medical Test
          </div>
          <div className="w-24 h-5 left-[36px] top-[100px] absolute justify-start text-zinc-800 text-lg font-semibold font-['Open_Sans']">
            Grand Test{" "}
          </div>
          <div className="w-24 h-5 left-[152px] top-[100px] absolute justify-start text-zinc-800 text-lg font-semibold font-['Open_Sans']">
            Total - 250
          </div>
          <div className="w-24 h-4 left-[36px] top-[36px] absolute justify-start text-zinc-800 text-base font-semibold font-['Open_Sans']">
            Leaderboard
          </div>
          <div className="w-20 h-20 left-[448.90px] top-[155px] absolute bg-gradient-to-b from-yellow-600 to-orange-100/50 rounded-full" />
          <div className="w-16 h-16 left-[455.88px] top-[161.97px] absolute bg-gradient-to-b from-yellow-600 via-yellow-600 to-amber-500 rounded-full" />
          <img
            className="w-16 h-16 left-[459.36px] top-[165.46px] absolute rounded-full"
            src="https://placehold.co/63x63"
          />
          <div className="w-20 h-20 left-[302.46px] top-[244.49px] absolute bg-gradient-to-b from-zinc-500 to-zinc-400/20 rounded-full" />
          <div className="w-16 h-16 left-[309.43px] top-[251.47px] absolute bg-gradient-to-b from-zinc-500 via-neutral-400 to-zinc-400 rounded-full" />
          <img
            className="w-16 h-16 left-[312.92px] top-[254.95px] absolute rounded-full"
            src="https://placehold.co/63x63"
          />
          <div className="w-20 h-20 left-[595.35px] top-[315.39px] absolute bg-gradient-to-b from-yellow-800 to-stone-500/50 rounded-full" />
          <div className="w-16 h-16 left-[602.32px] top-[322.36px] absolute bg-gradient-to-b from-yellow-800 via-yellow-800 to-stone-500 rounded-full" />
          <img
            className="w-16 h-16 left-[605.81px] top-[325.85px] absolute rounded-full"
            src="https://placehold.co/63x63"
          />
          <div className="w-28 h-80 left-[438.44px] top-[244.49px] absolute bg-zinc-300" />
          <div className="w-28 h-52 left-[292px] top-[333.99px] absolute bg-zinc-300" />
          <div className="w-28 h-36 left-[584.89px] top-[404.88px] absolute bg-zinc-300" />
          <div className="w-10 h-10 left-[469.82px] top-[242.17px] absolute overflow-hidden">
            <div className="w-6 h-9 left-[9.30px] top-[3.04px] absolute outline outline-2 outline-offset-[-0.87px] outline-amber-400" />
            <div className="w-2 h-2 left-[17.93px] top-[23.91px] absolute justify-center text-amber-400 text-[9.30px] font-bold font-['Open_Sans']">
              1
            </div>
          </div>
          <div className="w-10 h-10 left-[323.38px] top-[331.66px] absolute overflow-hidden">
            <div className="w-6 h-9 left-[9.30px] top-[3.04px] absolute outline outline-2 outline-offset-[-0.87px] outline-gray-400" />
            <div className="w-2 h-2 left-[17.93px] top-[23.91px] absolute justify-center text-gray-400 text-[9.30px] font-bold font-['Open_Sans']">
              2
            </div>
          </div>
          <div className="w-10 h-10 left-[616.27px] top-[402.56px] absolute overflow-hidden">
            <div className="w-6 h-9 left-[9.30px] top-[3.04px] absolute outline outline-2 outline-offset-[-0.87px] outline-yellow-800" />
            <div className="w-2 h-2 left-[17.93px] top-[23.91px] absolute justify-center text-yellow-800 text-[9.30px] font-bold font-['Open_Sans']">
              3
            </div>
          </div>
          <div className="w-16 h-5 left-[459.36px] top-[294.47px] absolute justify-start text-zinc-800 text-base font-normal font-['Open_Sans']">
            150/180
          </div>
          <div className="w-20 h-5 left-[451.23px] top-[510.65px] absolute justify-start text-zinc-800 text-base font-normal font-['Open_Sans']">
            Vinay Vyas
          </div>
          <div className="w-20 h-5 left-[303.62px] top-[510.65px] absolute justify-start text-zinc-800 text-base font-normal font-['Open_Sans']">
            Vinay Vyas
          </div>
          <div className="w-20 h-5 left-[596.51px] top-[510.65px] absolute justify-start text-zinc-800 text-base font-normal font-['Open_Sans']">
            Vinay Vyas
          </div>
          <div className="w-16 h-5 left-[312.92px] top-[383.96px] absolute justify-start text-zinc-800 text-base font-normal font-['Open_Sans']">
            100/180
          </div>
          <div className="w-16 h-5 left-[605.81px] top-[454.86px] absolute justify-start text-zinc-800 text-base font-normal font-['Open_Sans']">
            100/180
          </div>
          <div className="w-16 h-16 left-[54px] top-[588px] absolute bg-zinc-300 rounded-full" />
          <div className="w-16 h-16 left-[54px] top-[1244px] absolute bg-zinc-300 rounded-full" />
          <div className="w-16 h-16 left-[54px] top-[916px] absolute bg-zinc-300 rounded-full" />
          <div className="w-16 h-16 left-[54px] top-[1572px] absolute bg-zinc-300 rounded-full" />
          <div className="w-16 h-16 left-[54px] top-[670px] absolute bg-zinc-300 rounded-full" />
          <div className="w-16 h-16 left-[54px] top-[1326px] absolute bg-zinc-300 rounded-full" />
          <div className="w-16 h-16 left-[54px] top-[998px] absolute bg-zinc-300 rounded-full" />
          <div className="w-16 h-16 left-[54px] top-[752px] absolute bg-zinc-300 rounded-full" />
          <div className="w-16 h-16 left-[54px] top-[1408px] absolute bg-zinc-300 rounded-full" />
          <div className="w-16 h-16 left-[54px] top-[1080px] absolute bg-zinc-300 rounded-full" />
          <div className="w-16 h-16 left-[54px] top-[834px] absolute bg-zinc-300 rounded-full" />
          <div className="w-16 h-16 left-[54px] top-[1490px] absolute bg-zinc-300 rounded-full" />
          <div className="w-16 h-16 left-[54px] top-[1162px] absolute bg-zinc-300 rounded-full" />
          <div className="w-20 h-8 left-[142px] top-[606px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            Aman
          </div>
          <div className="w-12 h-8 left-[770px] top-[606px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            4th
          </div>
          <div className="w-12 h-8 left-[770px] top-[1098px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            4th
          </div>
          <div className="w-12 h-8 left-[770px] top-[688px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            5th
          </div>
          <div className="w-12 h-8 left-[770px] top-[1180px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            5th
          </div>
          <div className="w-12 h-8 left-[770px] top-[770px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            6th
          </div>
          <div className="w-12 h-8 left-[770px] top-[1262px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            6th
          </div>
          <div className="w-12 h-8 left-[770px] top-[852px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            7th
          </div>
          <div className="w-12 h-8 left-[770px] top-[1344px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            7th
          </div>
          <div className="w-12 h-8 left-[770px] top-[934px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            8th
          </div>
          <div className="w-12 h-8 left-[770px] top-[1426px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            8th
          </div>
          <div className="w-12 h-8 left-[770px] top-[1016px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            9th
          </div>
          <div className="w-12 h-8 left-[770px] top-[1508px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            9th
          </div>
          <div className="w-16 h-8 left-[754px] top-[1590px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            10th
          </div>
          <div className="w-20 h-8 left-[142px] top-[1262px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            Aman
          </div>
          <div className="w-20 h-8 left-[142px] top-[934px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            Aman
          </div>
          <div className="w-20 h-8 left-[142px] top-[1590px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            Aman
          </div>
          <div className="w-20 h-8 left-[142px] top-[688px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            Aman
          </div>
          <div className="w-20 h-8 left-[142px] top-[1344px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            Aman
          </div>
          <div className="w-20 h-8 left-[142px] top-[1016px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            Aman
          </div>
          <div className="w-20 h-8 left-[142px] top-[770px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            Aman
          </div>
          <div className="w-20 h-8 left-[142px] top-[1426px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            Aman
          </div>
          <div className="w-20 h-8 left-[142px] top-[1098px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            Aman
          </div>
          <div className="w-20 h-8 left-[142px] top-[852px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            Aman
          </div>
          <div className="w-20 h-8 left-[142px] top-[1508px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            Aman
          </div>
          <div className="w-20 h-8 left-[142px] top-[1180px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            Aman
          </div>
          <div className="w-20 h-8 left-[843px] top-[606px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            58/60
            <br />
          </div>
          <div className="w-20 h-8 left-[843px] top-[1262px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            58/60
            <br />
          </div>
          <div className="w-20 h-8 left-[843px] top-[934px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            58/60
            <br />
          </div>
          <div className="w-20 h-8 left-[843px] top-[1590px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            58/60
            <br />
          </div>
          <div className="w-20 h-8 left-[843px] top-[688px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            58/60
            <br />
          </div>
          <div className="w-20 h-8 left-[843px] top-[1344px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            58/60
            <br />
          </div>
          <div className="w-20 h-8 left-[843px] top-[1016px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            58/60
            <br />
          </div>
          <div className="w-20 h-8 left-[843px] top-[770px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            58/60
            <br />
          </div>
          <div className="w-20 h-8 left-[843px] top-[1426px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            58/60
            <br />
          </div>
          <div className="w-20 h-8 left-[843px] top-[1098px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            58/60
            <br />
          </div>
          <div className="w-20 h-8 left-[843px] top-[852px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            58/60
            <br />
          </div>
          <div className="w-20 h-8 left-[843px] top-[1508px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            58/60
            <br />
          </div>
          <div className="w-20 h-8 left-[843px] top-[1180px] absolute justify-start text-zinc-800 text-3xl font-normal font-['Open_Sans']">
            58/60
            <br />
          </div>
          <div className="w-28 h-6 left-[54px] top-[1680px] absolute justify-center text-zinc-800 text-2xl font-normal font-['Open_Sans']">
            1 - 25 of 5
          </div>
          <div className="w-0 h-12 left-[813px] top-[1667.20px] absolute origin-top-left -rotate-90 overflow-hidden">
            <div className="w-2.5 h-5 left-[19.05px] top-[14.82px] absolute outline outline-[3.18px] outline-offset-[-1.59px] outline-zinc-800" />
          </div>
          <div className="w-0 h-12 left-[887.80px] top-[1667.20px] absolute origin-top-left -rotate-90 overflow-hidden">
            <div className="w-2.5 h-5 left-[21.17px] top-[14.82px] absolute outline outline-[3.18px] outline-offset-[-1.59px] outline-zinc-800" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default LeaderBoardList