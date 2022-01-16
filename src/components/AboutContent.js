import { PageHeader, Space, Breadcrumb, Typography, Switch, Divider, Carousel, Radio} from 'antd';
import React from 'react';
import { useState } from 'react'; 
import uwindsor from '../images/uwindsor.jpg';
import uwindsor1 from '../images/1.jpg';
import uwindsor2 from '../images/2.jpg';
import uwindsor3 from  '../images/3.jpg'
const { Paragraph, Text } = Typography;

function AboutContent() {

  const contentStyle = {
    height: '600px',
    color: '#fff',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  
  const contentStyle1 = {...contentStyle,...{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${uwindsor})`}};
  const contentStyle2 = {...contentStyle,...{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${uwindsor1})`}};
  const contentStyle3 = {...contentStyle,...{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${uwindsor2})`}};
  const contentStyle4 = {...contentStyle,...{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${uwindsor3})`}};
  //const { Title } = Typography;
    const [ellipsis, setEllipsis] = React.useState(true);
    const [disabled, setDisabled] = React.useState(true);
    return (
      

    <div className='PageContent'>

    <Breadcrumb>
    <Breadcrumb.Item>
      <a href="/Homepage">University of Windsor</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="/About">About SmartCampus Project</a>
    </Breadcrumb.Item>
    </Breadcrumb>

  <PageHeader
    className="site-page-header"
    title="SmartCampus- A better Experience in campus"
    subTitle="Created by COMP499 Group Supervised By Xiaobu Yuan Instructor"
    />
{/*
<Paragraph style={{fontSize:20}}>
      Ant Design interprets the color system into two levels: a system-level color system and a
      product-level color system.
    </Paragraph>
    <Paragraph style={{fontSize:20}}>
      Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
      easier for designers to have a clear psychological expectation of color when adjusting colors,
      as well as facilitate communication in teams.
    </Paragraph>
   */} 

<div className='paragraph' style={{textAlign: "center", paddingBottom:400, fontSize:20}}>
    
<Divider>Gallary</Divider>

      <Carousel style={{marginLeft:200, marginRight:200}} autoplay>
        <div>
        <h3 style={contentStyle1}></h3>
        </div>
        <div>
          <h3 style={contentStyle2}></h3>
        </div>
        <div>
          <h3 style={contentStyle3}></h3>
        </div>
        <div>
          <h3 style={contentStyle4}></h3>
        </div>
      </Carousel>


    {/*<Space direction='vertical'>*/}
    <Divider>Who are We</Divider>
    <Space direction='vertical'>
    <Text strong>We are a group of four members creating this helpful website :)</Text>
    <Text >Lorry Wei: wei12e@uwindsor.ca</Text>
    <Text >Changkuan Gao: gao14o@uwindsor.ca</Text>
    
    <Text></Text>
    <Text></Text>
    </Space>
    <Divider>What is Smart Campus Project</Divider>
    
    <Switch
        checked ={!disabled}
        onChange={()=>{setDisabled(!disabled)}}
      />
    <Paragraph style={{marginLeft:200,marginRight:200}} ellipsis = {disabled}>
    Smart Campus - Better Students' Life on Campus, is a web-based multi-functional platform that has been developed
    for the use by University of Windsor students or faculty members alike. Users of the website could register according to 
    their acdemic progress, the website has different features for example the course recommendation system and a blog page
    for social media. The ultimate goal or aiming was to provide a overall help guide for current students and future students
    Despite the strong foundations held, the current platform lacks the data stream methods which provide courses for students
    that in different programs. The team intented to focus on bringing further novel improvements such as course recommendation
    for students in each terms and filter features that will guide students in different terms. That will provide the users of 
    Smart Campus with a more convenience experience.
    </Paragraph>
   
    <Divider>How Do I contribute to this project</Divider>
    <Switch
        checked ={!ellipsis}
        onChange={()=>{setEllipsis(!ellipsis)}}
      />

    <Paragraph style={{marginLeft:200,marginRight:200}} ellipsis = {ellipsis}>
    Smart Campus is a fully open-source website that allows everyone to use their creativity and bring more content
    as well as improve website users' experience. The deliverable products from our project will be a website application that implements different functions to help students in campus life. 
    The deliverable product from our first stage would be a blog feature. 
    The blog page would enable students to register as an user, post their request and share their campus experience with other students. 
    A registered user could post a thread, and reply to other threads inside the blog page. 
    The second objective from the first stage would be a course recommendation system. Inside this page, after students enter their credentials and sign in to the website.
    This page could bring up a list page that indicates all the courses for this program for each semester.
</Paragraph>
<Divider>Contact Us</Divider>

<Paragraph>
Due to COVID-19, we have suspended our regular office hours until we return to campus.
You can also reach any of us individually on the Discord server or our email addresses listed above.
</Paragraph>
<text>Stay Safe.</text>
<Divider/>
</div>
</div>
    
    )
}

export default AboutContent;
