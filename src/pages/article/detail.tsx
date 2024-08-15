import GlobalLayout from "@/layouts/GlobalLayout";
import {Button, Card, Input, Layout, List, Pagination} from "antd";
import React from "react";
import {Outlet} from "umi";

const Article = () => {
   return(
       <GlobalLayout>
           <Outlet/>
           <Layout style={{ margin: '20px' }}>
               <Card style={{ width: 1000, margin: 'auto' }}>
                   Digital Life and Intelligent Health Laboratory
               </Card>
           </Layout>
       </GlobalLayout>
   );
}
export default Article