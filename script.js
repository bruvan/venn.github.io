anychart.onDocumentReady(function () {
  // set chart theme
  anychart.theme("pastel");

  var data = [
    {
      x: "A",
      value: 100,
      name: "Waymond",
      tooltipTitle: "Waymond",
      tooltipDesc:
        "Waymond is Evelyn’s kind and optimistic husband. He believes\n in kindness and peaceful solutions. Though he seems naive, \nhis gentle approach hides deep strength. He grounds Evelyn, \nreminding her of love and family, always striving to keep \nthem together.",
      normal: { fill: "#FFEDC5 0.7" },
      hovered: { fill: "#FFDA8A 1" },
      selected: { fill: "#FFDA8A 1" }
    },
    {
      x: "B",
      value: 100,
      name: "Joy",
      tooltipTitle: "Joy",
      tooltipDesc:
        "Joy Wang is a young woman who feels lost and overwhelmed by\nthe endless possibilities of the multiverse. She struggles with the\npressure of expectations and her own sense of identity. As Jobu\n Tupaki, she embodies chaos and the fear that nothing really matters,\nbut deep down, she's just searching for love and acceptance, \nespecially from her mother.",
      normal: { fill: "#B6DCF5 0.7" },
      hovered: { fill: "#81C9F9 1" },
      selected: { fill: "#81C9F9 1" }
    },
    {
      x: "C",
      value: 100,
      name: "Gong Gong",
      tooltipTitle: "Gong Gong",
      tooltipDesc:
        "Gong Gong is Evelyn’s father, a traditional and stern figure.\nHe holds strong beliefs about family and duty.He has high \nexpectations and is often critical, which puts pressure on Evelyn.\nDespite his tough exterior, Gong Gong's actions are driven by \na deep sense of responsibility and love for his family.However, \nhe struggles to express it in a gentle way",
      normal: { fill: "#AFCCA7 0.7" },
      hovered: { fill: "#8ECD7E 1" },
      selected: { fill: "#8ECD7E 1" }
    },
    {
      x: "D",
      value: 200,
      name: "Evelyn",
      tooltipTitle: "Evelyn",
      tooltipDesc:
        "Evelyn is a hardworking and overwhelmed mother. She struggles\n with balancing her family's expectations and her own unfulfilled \ndreams. Evelyn feels stuck in her routine but is determined to keep\n her family together. Despite her tough exterior, she deeply cares\n for her loved ones and ultimately seeks to find meaning and \nconnection in her life.",
      normal: { fill: "#E8CBFF 0.7" },
      hovered: { fill: "#D198FF 1" },
      selected: { fill: "#D198FF 1" }
    },
    {
      x: ["A", "D"],
      value: 40,
      name: "",
      tooltipTitle: "Evelyn and Waymond",
      tooltipDesc:
        "Waymond and Evelyn have contrasting approaches to life—\nEvelyn is stressed and pragmatic, while Waymond is kind and\n optimistic. Their differences often lead to misunderstandings, \nbut Waymond’s unwavering kindness balances Evelyn’s anxiety. \nThis dynamic highlights a deep bond where Waymond’s gentle \nnature helps ground Evelyn, reminding her of the importance \nof love and family amidst their challenges.",
      normal: { fill: "#EDCBBE 0.6" },
      hovered: { fill: "#EDAA91 1" },
      selected: { fill: "#EDAA91 1" }
    },
    {
      x: ["D", "B"],
      value: 40,
      name: "",
      tooltipTitle: "Evelyn and Joy",
      tooltipDesc:
        "Joy and Evelyn both struggle with identity and expectations, \nleading to tension and emotional distance in their relationship. \nDespite feeling judged and disconnected, they each long for a\n deeper connection. Their shared pain and search for meaning\n reveal how similar they are, even when they can't see it,\n creating a powerful bond beneath the conflict.",
      normal: { fill: "#B1C6FA 0.8" },
      hovered: { fill: "#79A0FF 1" },
      selected: { fill: "#79A0FF 1" }
    },
    {
      x: ["D", "C"],
      value: 40,
      name: "",
      tooltipTitle: "Evelyn and Gong Gong",
      tooltipDesc:
        "Evelyn and Gong Gong have a relationship marked by traditional \nvalues and high expectations. Gong Gong’s stern and critical nature \npressures Evelyn, making her feel burdened and judged. Despite \nthis tension, Evelyn still seeks his approval and love, highlighting a \ncomplex bond of duty, unspoken care, and the desire to bridge \ntheir emotional distance.",
      normal: { fill: "#BDC9C3 0.8" },
      hovered: { fill: "#9FCAB5 1" },
      selected: { fill: "#9FCAB5 1" }
    },
    {
      x: ["B", "C"],
      value: 40,
      name: "",
      normal: { fill: "#AAD7C1 0.8" }
    },
    {
      x: ["B", "C", "D"],
      value: 10,
      name: "",
      tooltipTitle: "Evelyn, Gong Gong and Joy",
      tooltipDesc:
        "Evelyn, Gong Gong, and Joy all share a deep disappointment\n in how their family has turned out. Gong Gong feels Evelyn\n hasn’t met his traditional standards, Evelyn feels she’s failed\n both her father and daughter, and Joy is frustrated by her\n family’s lack of acceptance. Despite their differences, they all \ngrapple with unmet expectations and a longing for a better \nfamily connection.",
      label: { enabled: true, fontStyle: "normal" },
      normal: { fill: "#A3C9C1 0.9" },
      hovered: { fill: "#81D0BF 1" },
      selected: { fill: "#81D0BF 1" }
    }
  ];

  // create venn diagram
  var chart = anychart.venn(data);

  // set chart title
  chart
    .title()
    .enabled(true)
    .fontFamily("Roboto, sans-serif")
    .fontSize(24)
    .padding({ bottom: 0 })
    .text("");

  // set chart stroke
  chart.stroke("0.25dec #b0b0b0");

  // set labels settings
  chart
    .labels()
    .fontSize(14)
    .fontColor("#5e6469")
    .hAlign("center")
    .vAlign("center")
    .fontFamily("Roboto, sans-serif")
    .fontWeight("500")
    .format("{%Name}");

  // set intersections labels settings
  chart
    .intersections()
    .labels()
    .fontStyle("italic")
    .fontColor("#fff")
    .format("{%Name}");

  // disable legend
  chart.legend(false);

  // set tooltip settings
  chart
    .tooltip()
    .titleFormat("{%tooltipTitle}")
    .format("{%tooltipDesc}")
    .background()
    .fill("#000 0.5");

  // set container id for the chart
  chart.container("container");

  // initiate chart drawing
  chart.draw();
});
