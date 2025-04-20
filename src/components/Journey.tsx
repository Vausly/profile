import React from 'react';

const Journey = () => {
  const timeline = [
    { year: 2017, title: 'The Beginning', description: 'Started my journey in the digital world, first <a href="https://www.youtube.com/channel/UCabb5RfYa62j44O_uUPZI5A?sub_confirmation=1" target="_blank" rel="noopener noreferrer">YouTube account</a>, first project on <a href="https://archive.ph/Yi4sS" target="_blank" rel="noopener noreferrer">UTK.io</a> (a Minecraft in-game content sharing service) like Minecraft Maps, Mods, seeds, etc.' },
    { year: 2018, title: 'A Community Project', description: 'My Minecraft in-game content project approximately has getting more than 1 milion downloads on <a href="https://web.archive.org/web/20180705003639/http://utk.io/" target="_blank" rel="noopener noreferrer">UTK.io</a> in total, my first public article also published this year' },
    { year: 2019, title: 'Video Content Creation', description: 'Started creating a horror gaming content on YouTube started on 31 December 2018 until March 2019, my first Minecraft video also created in this year' },
    { year: 2020, title: 'Pandemic Period', description: 'New innovation to create a Mobile Legends content like Magic Chess mode or Funny Moments' },
    { year: 2021, title: 'Lost of Motivation', description: 'Lost of motivation & stopping creating on UTK.io until its <a href="https://web.archive.org/web/20221227190103/https://utk.io/" target="_blank" rel="noopener noreferrer">bankruptcy on (01/01/2023). Almost all of my data also lost because of data center fire (on mid 2021), temporary vaccumed from YT</a>' },
    { year: 2022, title: 'Academic Focus', description: 'Taking a break from content creation to focus on academics, only few content was uploaded' },
    { year: 2023, title: 'Resolution', description: 'Regaining motivation to create a content on YouTube like Minecraft & Mobile Legends content, getting <a href="http://youtube.com/post/Ugkx3kj37Tj6dKHjlfQ0LX2i-bU3FRjgAX_z" target="_blank" rel="noopener noreferrer">my first 1k subs on YT</a>' },
    { year: 2024, title: 'Community Build', description: 'I do a rebranding from Lesunk to Vausly, getting accepted as <a href="https://x.com/Vauslyy/status/1822992448744050933" target="_blank" rel="noopener noreferrer">YouTube partner</a> & first experience of viral videos on YouTube & <a href="http://youtube.com/post/Ugkx_uRlIAG22Bsts7MPiXtcvdVolYH2fLGE" target="_blank" rel="noopener noreferrer">TikTok</a>, reached <a href="https://x.com/Vauslyy/status/1850656160472580358" target="_blank" rel="noopener noreferrer"> 5k subs on YT</a>' },
    { year: 2025, title: 'Future Goals', description: 'Continuing to innovate and creating on the internet. I`m also planning to create something different' },
   // { year: 2026, title: 'Title', description:'Description'}
  ];

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500 hidden md:block"></div>
      <div className="space-y-12">
        {timeline.map((item, index) => (
          <div 
            key={item.year} 
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-4 md:gap-0`}
          >
            <div className={`w-full md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
            } text-center md:text-left`}>
              <h3 className="text-2xl font-bold text-purple-400">{item.year}</h3>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300"
              dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
            <div className="w-4 h-4 bg-purple-500 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2"></div>
            <div className="w-full md:w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;