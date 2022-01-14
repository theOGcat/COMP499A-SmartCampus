import { PageHeader, Space } from 'antd';
import { Breadcrumb } from 'antd';
import { Typography, Switch } from 'antd';
import React from 'react';
import { Divider } from 'antd';
import { useState } from 'react'; 

const { Paragraph, Text } = Typography;

function AboutContent() {
    
    const { Title } = Typography;
    const [ellipsis, setEllipsis] = React.useState(true);
    return (
    <div className='PageContent'>

    <Breadcrumb>
    <Breadcrumb.Item>
      <a href="/HomeContent">University of Windsor</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="/About">About SmartCampus Project</a>
    </Breadcrumb.Item>
    </Breadcrumb>

  <PageHeader
    className="site-page-header"
    title="SmartCampus- A better Experience in campus"
    subTitle="Created by COMP499 Group Supervised By Xiaobu Yuan Instructor"/>

<div className='paragraph' style={{textAlignVertical: "center",textAlign: "center",}}>
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level color system and a
      product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
      easier for designers to have a clear psychological expectation of color when adjusting colors,
      as well as facilitate communication in teams.
    </Paragraph>
    <Space direction='vertical'>
    <Divider>Who are We</Divider>
    
    <Text strong>We are a group of four members creating this helpful website :)</Text>
    <Text >Lorry Wei: wei12e@uwindsor.ca</Text>
    <Text >Changkuan Gao: gao14o@uwindsor.ca</Text>
    <Text></Text>
    <Text></Text>
    <Divider>Contact Us</Divider>
    <p>
    Due to COVID-19, we have suspended our regular office hours until we return to campus.
    You can also reach any of us individually on the Discord server or our email addresses listed above, our with our society email address css@uwindsor.ca.
    </p>
    <Paragraph>Due to COVID-19, we have suspended our regular office hours until we return to campus.
    You can also reach any of us individually on the Discord server or our email addresses listed above, our with our society email address css@uwindsor.ca.
    </Paragraph>
    <Paragraph>Due to COVID-19, we have suspended our regular office hours until we return to campus.
    You can also reach any of us individually on the Discord server or our email addresses listed above, our with our society email address css@uwindsor.ca.
    </Paragraph>
    <Divider>How Do I contribute to this project</Divider>
    <Paragraph>Everyone in the Computer Science Society is elected by you, the undergraduate students in CS.

See the CSS Constitution which contains the titles and descriptions of all roles in CSS.

Elections are now split up into two rounds. Nominations for the first round of positions which includes all head and executive positions takes place in February, and the second round for the rest of the positions takes place in March. If a student runs for a position in the first round and fails to get the votes, they may run for another position in the second round.

The vote for our two first-year representatives for the current school year usually takes place in September or October.

When the time comes, everyone will be notified via email and Discord on how to nominate and vote for CSS positions.

Here is the most current chart showing the hierarchy of positions on CSS:
      
</Paragraph>
<Divider/>
</Space>

</div>







    
</div>
    
    )
}

export default AboutContent;
