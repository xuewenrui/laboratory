import GlobalLayout from "@/layouts/GlobalLayout";
import {Card, Layout} from "antd";

function Index() {

    return (

        <GlobalLayout>
            <Layout style={{margin: '20px'}}>
                <Card style={{width: 1000, margin: 'auto'}}>
                    关于我们  {/*待定*/}
                </Card>
            </Layout>
        </GlobalLayout>
    )
}

export default Index