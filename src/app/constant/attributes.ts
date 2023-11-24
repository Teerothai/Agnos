import { AreaHTMLAttributes, DetailedHTMLProps } from "react";

type handleClickParams = {
    img: string, caption: string, coord: string
}

type areaProps = DetailedHTMLProps<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement> & handleClickParams


export const fingerAreaProps : areaProps[] =[
    {
        target: "" ,
        alt: "ข้อนิ้วส่วนปลาย",
        title: "ข้อนิ้วส่วนปลาย",
        coords: "177,238,199,231,218,240,217,260,192,272,175,266,172,250",
        shape: "poly", 
        img: "/finger/dip-highlight.png",
        caption: "/finger/dip-active.png",
        coord: "177,238,199,231,218,240,217,260,192,272,175,266,172,250"
    },
    {
        target: "" ,
        alt: "ข้อนิ้วส่วนปลาย",
        title: "ข้อนิ้วส่วนปลาย",
        coords: "280,134,308,131,323,144,313,161,286,165,270,151",
        shape: "poly", 
        img: "/finger/dip-highlight.png",
        caption: "/finger/dip-active.png",
        coord: "280,134,308,131,323,144,313,161,286,165,270,151"
    },{
        target: "" ,
        alt: "ข้อนิ้วส่วนปลาย",
        title: "ข้อนิ้วส่วนปลาย",
        coords: "367,91,398,85,411,99,404,119,371,121,355,107",
        shape: "poly", 
        img: "/finger/dip-highlight.png",
        caption: "/finger/dip-active.png",
        coord: "367,91,398,85,411,99,404,119,371,121,355,107"
    },{
        target: "" ,
        alt: "ข้อนิ้วส่วนปลาย",
        title: "ข้อนิ้วส่วนปลาย",
        coords: "458,131,467,111,502,112,514,128,500,144,470,146",
        shape: "poly", 
        img: "/finger/dip-highlight.png",
        caption: "/finger/dip-active.png",
        coord: "458,131,467,111,502,112,514,128,500,144,470,146"
    },
    
    {
        target: "" ,
        alt: "ข้อนิ้วมือส่วนต้น",
        title: "ข้อนิ้วมือส่วนต้น",
        coords: "199,333,205,313,232,303,248,312,244,334,215,345",
        shape: "poly", 
        img: "/finger/pip-highlight.png",
        caption: "/finger/pip-active.png",
        coord: "199,333,205,313,232,303,248,312,244,334,215,345"
    },{
        target: "" ,
        alt: "ข้อนิ้วมือส่วนต้น",
        title: "ข้อนิ้วมือส่วนต้น",
        coords: "283,234,321,228,335,244,325,263,289,268,275,255",
        shape: "poly", 
        img: "/finger/pip-highlight.png",
        caption: "/finger/pip-active.png",
        coord: "283,234,321,228,335,244,325,263,289,268,275,255"
    },{
        target: "" ,
        alt: "ข้อนิ้วมือส่วนต้น",
        title: "ข้อนิ้วมือส่วนต้น",
        coords: "373,197,410,194,422,211,412,228,376,230,363,217",
        shape: "poly", 
        img: "/finger/pip-highlight.png",
        caption: "/finger/pip-active.png",
        coord: "373,197,410,194,422,211,412,228,376,230,363,217"
    },{
        target: "" ,
        alt: "ข้อนิ้วมือส่วนต้น",
        title: "ข้อนิ้วมือส่วนต้น",
        coords: "466,209,503,209,518,226,504,244,465,243,455,226",
        shape: "poly", 
        img: "/finger/pip-highlight.png",
        caption: "/finger/pip-active.png",
        coord: "466,209,503,209,518,226,504,244,465,243,455,226"
    },{
        target: "" ,
        alt: "ข้อนิ้วมือส่วนต้น",
        title: "ข้อนิ้วมือส่วนต้น",
        coords: "635,406,654,396,683,417,679,432,663,446,636,425",
        shape: "poly", 
        img: "/finger/pip-highlight.png",
        caption: "/finger/pip-active.png",
        coord: "635,406,654,396,683,417,679,432,663,446,636,425"
    }
    
    ,{
        target: "" ,
        alt: "ข้อโคนนิ้วมือ",
        title: "ข้อโคนนิ้วมือ",
        coords: "234,405,273,390,293,397,297,417,288,433,252,444,232,440,227,422",
        shape: "poly", 
        img: "/finger/mcp-highlight.png",
        caption: "/finger/mcp-active.png",
        coord: "234,405,273,390,293,397,297,417,288,433,252,444,232,440,227,422"
    },{
        target: "" ,
        alt: "ข้อโคนนิ้วมือ",
        title: "ข้อโคนนิ้วมือ",
        coords: "299,372,343,357,360,368,365,386,353,401,312,413,299,404,294,389",
        shape: "poly", 
        img: "/finger/mcp-highlight.png",
        caption: "/finger/mcp-active.png",
        coord: "299,372,343,357,360,368,365,386,353,401,312,413,299,404,294,389"
    },{
        target: "" ,
        alt: "ข้อโคนนิ้วมือ",
        title: "ข้อโคนนิ้วมือ",
        coords: "377,344,423,340,436,355,436,373,423,386,383,388,370,374,367,359",
        shape: "poly", 
        img: "/finger/mcp-highlight.png",
        caption: "/finger/mcp-active.png",
        coord: "377,344,423,340,436,355,436,373,423,386,383,388,370,374,367,359"
    },{
        target: "" ,
        alt: "ข้อโคนนิ้วมือ",
        title: "ข้อโคนนิ้วมือ",
        coords:  "460,340,503,345,515,359,511,380,497,389,454,382,445,368,446,352",
        shape: "poly", 
        img: "/finger/mcp-highlight.png",
        caption: "/finger/mcp-active.png",
        coord:  "460,340,503,345,515,359,511,380,497,389,454,382,445,368,446,352"
    },{
        target: "" ,
        alt: "ข้อโคนนิ้วมือ",
        title: "ข้อโคนนิ้วมือ",
        coords: "596,506,618,529,623,549,607,564,585,558,563,537,564,519,573,509",
        shape: "poly", 
        img: "/finger/mcp-highlight.png",
        caption: "/finger/mcp-active.png",
        coord: "596,506,618,529,623,549,607,564,585,558,563,537,564,519,573,509"
    },{
        target: "" ,
        alt: "ปุ่มทั้งหมด",
        title: "ปุ่มทั้งหมด",
        coords: "177,238,199,231,218,240,217,260,192,272,175,266,172,250",
        shape: "poly", 
        img: "/finger/others-highlight.png",
        caption: "",
        coord:  "146,881,121,903,119,935,143,959,661,960,687,939,687,904,660,879"
    }
]

export const absAreaProps : areaProps[] =[
    {
        target: "" ,
        alt: "รอบสะดือ",
        title: "รอบสะดือ",
        coords: "400,517,39",
        shape: "circle", 
        img: "/abs/umbilicus-highlight.png",
        caption: "/abs/umbilicus-active.png",
        coord: "400,517,39"
    },
    {
        target: "" ,
        alt: "ลิ้นปี่",
        title: "ลิ้นปี่",
        coords: "343,399,355,373,400,334,439,367,456,399,400,468",
        shape: "poly", 
        img: "/abs/epigastrium-highlight.png",
        caption: "/abs/epigastrium-active.png",
        coord: "343,399,355,373,400,334,439,367,456,399,400,468"
    },{
        target: "" ,
        alt: "ช่องท้องล่างขวา",
        title: "ช่องท้องล่างขวา",
        coords: "270,524,344,527,371,563,333,641,297,619,266,577",
        shape: "poly", 
        img: "/abs/rlq-highlight.png",
        caption: "/abs/rlq-active.png",
        coord: "270,524,344,527,371,563,333,641,297,619,266,577"
    },{
        target: "" ,
        alt: "ท้องน้อย",
        title: "ท้องน้อย",
        coords: "398,566,426,582,458,641,427,665,398,673,361,656,345,639,369,592",
        shape: "poly", 
        img: "/abs/suprapubic-highlight.png",
        caption: "/abs/suprapubic-active.png",
        coord: "398,566,426,582,458,641,427,665,398,673,361,656,345,639,369,592"
    },
    {
        target: "" ,
        alt: "ปุ่มปวดทั่วท้อง",
        title: "ปุ่มปวดทั่วท้อง",
        coords: "525,914,526,880,506,854,291,855,268,878,269,908,290,933,499,933",
        shape: "poly", 
        img: "/abs/all-over-highlight.png",
        caption: "",
        coord: "525,914,526,880,506,854,291,855,268,878,269,908,290,933,499,933"
    },{
        target: "" ,
        alt:"ช่องท้องด้านบนขวา",
        title: "ช่องท้องด้านบนขวา",
        coords: "309,410,276,434,270,507,346,509,362,479,383,468,329,403",
        shape: "poly", 
        img: "/abs/ruq-highlight.png",
        caption: "/abs/ruq-active.png",
        coord: "309,410,276,434,270,507,346,509,362,479,383,468,329,403"
    },{
        target: "" ,
        alt: "ช่องท้องด้านบนซ้าย",
        title: "ช่องท้องด้านบนซ้าย",
        coords: "422,465,467,403,501,411,518,427,530,507,481,509,455,509,444,485",
        shape: "poly", 
        img: "/abs/luq-highlight.png",
        caption: "/abs/luq-active.png",
        coord: "422,465,467,403,501,411,518,427,530,507,481,509,455,509,444,485"
    },{
        target: "" ,
        alt: "ช่องท้องล่างซ้าย",
        title: "ช่องท้องล่างซ้าย",
        coords: "528,526,529,562,509,607,473,640,453,594,427,565,446,549,456,527",
        shape: "poly", 
        img: "/abs/llq-highlight.png",
        caption: "/abs/llq-active.png",
        coord: "528,526,529,562,509,607,473,640,453,594,427,565,446,549,456,527"
    }
]