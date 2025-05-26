import React from "react";

const LeaderBoardList = ({ users }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto overflow-x-hidden">
      <div className="fixed bg-[#d2d2d2] opacity-50 inset-0 backdrop-blur-sm"></div>

      <div className="relative bg-gray-200 rounded-[25px] w-[700px] max-h-[90vh] overflow-y-auto leaderboard-modal">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-zinc-800">Leaderboard</h2>
            <h1 className="text-2xl font-semibold text-zinc-800 mt-2">
              Master UG Medical Test
            </h1>
            <div className="flex gap-4 mt-2">
              <span className="text-lg font-semibold text-zinc-800">
                Grand Test
              </span>
              <span className="text-lg font-semibold text-zinc-800">
                Total - 250
              </span>
            </div>
          </div>

          {/* Top 3 Winners - Podium Style */}
          <div className="relative h-[340px] flex justify-center items-end gap-12 mb-12">
            {/* Second Place */}
            <div className="absolute bottom-0 left-1/2 -translate-x-[160px] flex flex-col items-center">
              <div className="relative w-[72px] h-[72px] bg-gradient-to-b from-zinc-500 to-zinc-400/20 rounded-full p-1 mb-3">
                <div className="w-full h-full bg-gradient-to-b from-zinc-500 via-neutral-400 to-zinc-400 rounded-full">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://placehold.co/60x60"
                    alt="2nd"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full border-2 border-gray-400">
                  <span className="text-sm font-bold text-gray-600">2</span>
                </div>
              </div>
              <div className="h-[140px] w-[80px] bg-zinc-300"></div>
              <div className="mt-3 text-center">
                <p className="text-base font-medium">100/180</p>
                <p className="text-base font-medium">Vinay Vyas</p>
              </div>
            </div>

            {/* First Place */}
            <div className="absolute bottom-0 left-1/2 -translate-x-[44px] flex flex-col items-center">
              <div className="relative w-[88px] h-[88px] bg-gradient-to-b from-yellow-600 to-orange-100/50 rounded-full p-1 mb-3">
                <div className="w-full h-full bg-gradient-to-b from-yellow-600 via-yellow-600 to-amber-500 rounded-full">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://placehold.co/75x75"
                    alt="1st"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full border-2 border-amber-400">
                  <span className="text-sm font-bold text-amber-600">1</span>
                </div>
              </div>
              <div className="h-[180px] w-[90px] bg-zinc-300"></div>
              <div className="mt-3 text-center">
                <p className="text-lg font-semibold">150/180</p>
                <p className="text-lg font-medium">Vinay Vyas</p>
              </div>
            </div>

            {/* Third Place */}
            <div className="absolute bottom-0 left-1/2 translate-x-[72px] flex flex-col items-center">
              <div className="relative w-[72px] h-[72px] bg-gradient-to-b from-yellow-800 to-stone-500/50 rounded-full p-1 mb-3">
                <div className="w-full h-full bg-gradient-to-b from-yellow-800 via-yellow-800 to-stone-500 rounded-full">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://placehold.co/60x60"
                    alt="3rd"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full border-2 border-yellow-800">
                  <span className="text-sm font-bold text-yellow-900">3</span>
                </div>
              </div>
              <div className="h-[100px] w-[80px] bg-zinc-300"></div>
              <div className="mt-3 text-center">
                <p className="text-base font-medium">100/180</p>
                <p className="text-base font-medium">Vinay Vyas</p>
              </div>
            </div>
          </div>

          {/* List of other participants */}
          <div className="space-y-3">
            {(users || []).map((user, i) => {
              const rank = i + 4; // Start from 4th rank after top 3
              return (
                <div
                  key={user.id || `rank-${rank}`}
                  className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-300 rounded-full">
                      {user.avatar && (
                        <img 
                          src={user.avatar} 
                          alt={user.name} 
                          className="w-full h-full rounded-full object-cover"
                        />
                      )}
                    </div>
                    <span className="text-lg font-medium text-zinc-800">
                      {user.name || `Participant ${rank}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="text-lg font-medium text-zinc-800">
                      {rank}th
                    </span>
                    <span className="text-lg font-medium text-zinc-800">
                      {user.score || '0'}/{user.total || '60'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 px-4">
            <span className="text-base text-zinc-800">1 - 25 of 5</span>
            <div className="flex gap-6">
              <button className="text-xl text-zinc-800 hover:text-zinc-600">
                ←
              </button>
              <button className="text-xl text-zinc-800 hover:text-zinc-600">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardList;
