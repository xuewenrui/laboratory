import GlobalLayout from "@/layouts/GlobalLayout";
import { Card, Layout} from "antd";
import React from "react";

const Article = () => {
   return(
       <GlobalLayout>
           <Layout style={{ margin: '20px' }}>
               <Card style={{
                   width: '100%',
                   maxWidth: '1000px', // 稍微增加宽度以适应更多内容
                   margin: '20px auto', // 水平和垂直居中
                   padding: '20px',
                   borderRadius: 12, // 更大的边框半径
                   boxShadow: '0 4px 16px rgba(0,0,0,0.1)', // 更明显的阴影
                   backgroundColor: '#fff',
                   overflow: 'hidden', // 防止内容溢出
               }}>

                   Digital Life and Intelligent Health Laboratory
               </Card>
           </Layout>
       </GlobalLayout>
   );
}
export default Article