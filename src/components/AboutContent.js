import { PageHeader } from 'antd';
import { Breadcrumb } from 'antd';
import { Typography, Switch } from 'antd';
import React from 'react';
//import { useState } from 'react'; 没太用明白usestate在这里是干什么的

const { Paragraph, Text } = Typography;

function AboutContent() {
    const [ellipsis, setEllipsis] = React.useState(true);
    return (
    <div className='PageHeader'>

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
    subTitle="This is a subtitle"/>
        <div className='Content'>
            <Switch
        checked={ellipsis}
        onChange={() => {
          setEllipsis(!ellipsis);
        }}/>
         <Paragraph ellipsis={ellipsis}>
         The University of Windsor is a comprehensive, student-focused university, with more than 16,000 students enrolled in a broad range of undergraduate and graduate programs, including:
      </Paragraph>

      <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
      We have strong student-faculty relationships, exceptional award-winning faculty and innovative staff. It creates a unifying atmosphere of excellence across all of our faculties to encourage lifelong learning, teaching, research and discovery.
The University of Windsor also ushered in a new era in September 2015 with the opening of classes at the first phase of its downtown campus in the heart of Windsor’s core. The new building—which retains the historic facade of the former Windsor Star newspaper building—houses the School of Social Work and the Centre for Executive and Professional Education.
The second phase of the downtown campus includes the School of Creative Arts, located in the century-old site of the Windsor Armouries and the Alan Wildeman Centre for Creative Arts.
      </Paragraph>

      <Text
        style={ellipsis ? { width: 100 } : undefined}
        ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}
      >
        The University of Windsor is located next to North America’s busiest international border crossing and looks out on one of Canada’s most beautiful waterfronts on the Detroit River. Windsor is also Canada’s southernmost city and has some of the country’s best weather.
      </Text>

        </div>
    </div>
    )
}

export default AboutContent;
