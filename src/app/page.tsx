"use client";

import { useState } from "react";
type bills = {
  bill: number;
  tip: number;
  person: number;
};

export default function Home() {
  const [billdata, setBill] = useState<bills>({
    bill: 0,
    tip: 10,
    person: 1,
  });
  const Totaltip = (billdata.bill * (billdata.tip / 100)).toFixed(2);
  const TipPerperson = (parseFloat(Totaltip) / billdata.person).toFixed(2);
  const Totalbill = (billdata.bill + parseFloat(Totaltip)).toFixed(2);
  const TotalPerperson = (parseFloat(Totalbill) / billdata.person).toFixed(2);

  const tipevent = (e: number) => {
    if (e == 1 && billdata.tip < 100) {
      setBill((value) => ({ ...value, tip: value.tip + 1 }));
    } else if (e == 2 && billdata.tip > 10) {
      setBill((value) => ({ ...value, tip: value.tip - 1 }));
    }
  };

  const personevent = (e: number) => {
    if (e == 1) {
      setBill((value) => ({ ...value, person: value.person + 1 }));
    } else if (e == 2 && billdata.person > 1) {
      setBill((value) => ({ ...value, person: value.person - 1 }));
    }
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-row ">
      <div className="w-1/2 h-2/3 shadow-lg  flex flex-col rounded-xl border-2 md:flex-row sm:flex-col">
        <div className="w-1/2 h-full  flex justify-center items-center flex-col rounded-lg sm:text-sm md:text-3xl md:w-1/2 md:h-full sm:w-full sm:h-1/2 p-3 gap-2">
          <div className="  flex flex-col w-11/12 ">
            <label className="pl-2 font-semibold"> Total Bill</label>
            <input
              type="number"
              placeholder="Total bill"
              className=" p-3 border-2  rounded-xl"
              value={billdata.bill || 0}
              onChange={(e) => {
                setBill((value) => ({
                  ...value,
                  bill: parseInt(e.target.value),
                }));
              }}
            ></input>
          </div>

          <div className="flex flex-col  w-11/12">
            <label className="pl-2 font-semibold">Tip Persentage</label>
            <div className="w-full flex justify-center items-center gap-2">
              <button
                className="p-3  shadow-md text-white rounded-xl border-2 h-full aspect-square bg-red-400 hover:bg-red-300 active:scale-90"
                onClick={() => tipevent(2)}
              >
                -
              </button>
              <input
                type="number"
                placeholder="Tip"
                className=" p-3 w-11/12  border-2  rounded-xl"
                defaultValue={billdata.tip}
                max="100"
                min="10"
                disabled
              ></input>
              <button
                className="p-3  shadow-md text-white rounded-xl border-2 h-full aspect-square bg-blue-500 hover:bg-blue-400 active:scale-90 "
                onClick={() => tipevent(1)}
              >
                +
              </button>
            </div>
          </div>

          <div className=" flex flex-col w-11/12">
            <label className="pl-2 font-semibold">Number of Person</label>
            <div className="w-full flex justify-center items-center gap-2">
              <button
                className="p-3  shadow-md text-white rounded-xl border-2 h-full aspect-square bg-red-400 hover:bg-red-300 active:scale-90"
                onClick={() => personevent(2)}
              >
                -
              </button>
              <input
                type="number"
                placeholder="Number of Person"
                className=" p-3 w-11/12  border-2  rounded-xl"
                defaultValue={billdata.person}
                disabled
              ></input>
              <button
                className="p-3  shadow-md text-white rounded-xl border-2 h-full aspect-square bg-blue-500 hover:bg-blue-400 active:scale-90"
                onClick={() => personevent(1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full  flex justify-center items-center flex-col gap-9 p-10 sm:text-sm md:text-3xl md:w-1/2 md:h-full sm:w-full sm:h-1/2">
          <div className="w-full  font-semibold ">
            <label>Total Bill per Person: {TotalPerperson}</label>
          </div>
          <div className="w-full  font-semibold">
            <label>Tip each Person: {TipPerperson}</label>
          </div>
          <div className="w-full font-semibold">
            <label>Total Tip: {Totaltip}</label>
          </div>
          <div className="w-full  font-semibold">
            <label>
              Total Bill:{" "}
              <span className="text-bold text-red-500">{Totalbill}</span>
            </label>
          </div>

          <div className="w-full  justify-center items-center flex ">
            <button
              type="button"
              onClick={() => {
                setBill(() => ({ bill: 0, person: 1, tip: 10 }));
              }}
              className=" w-2/3  p-2 rounded-xl border-2 border-blue-400 bg-white font-bold text-blue-500 hover:bg-blue-400 hover:text-white  active:scale-95 active:shadow-2xl active:shadow-blue-700 duration-300"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
