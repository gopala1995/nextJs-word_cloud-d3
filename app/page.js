"use client";
import word from "../data.json";
// import { useMemo } from "react";
// import { render } from "react-dom";
import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

export default function Home() {
  console.log(word);
  const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

  return (
    <div>
      <WordCloud
        data={word}
        width={700}
        height={600}
        font="Times"
        fontStyle="italic"
        fontWeight="bold"
        fontSize={(word) => Math.log2(word.value) * 5}
        spiral="rectangular"
        rotate={(word) => word.value % 360}
        padding={5}
        random={Math.random}
        // fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
        // onWordClick={(event, d) => {
        //   console.log(`onWordClick: ${d.text}`);
        // }}
        // onWordMouseOver={(event, d) => {
        //   console.log(`onWordMouseOver: ${d.text}`);
        // }}
        // onWordMouseOut={(event, d) => {
        //   console.log(`onWordMouseOut: ${d.text}`);
        // }}
      />
    </div>
  );
}
