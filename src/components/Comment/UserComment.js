import {React, useState, useEffect} from 'react'
import axios from 'axios'
import { Comment, Tooltip, List, Avatar, Form, Button, Input } from "antd";

const { TextArea } = Input

const backendURL = "http://localhost:3001/";


// Field to add new comment
// const Editor = ({ onChange, onSubmit, submitting, value }) => (
//   <>
//     <Form.Item>
//       <TextArea rows={4} onChange={onChange} value={value} />
//     </Form.Item>
//     <Form.Item>
//       <Button
//         htmlType="submit"
//         loading={submitting}
//         onClick={onSubmit}
//         type="primary"
//       >
//         Add Comment
//       </Button>
//     </Form.Item>
//   </>
// )



const UserComment = ({ pageNum, userID, firstName, lastName}) => {
  const [data, setData] = useState([]); // store all fetched comments
  const [submitting, setSubmitStatus] = useState(false);
  const [value, setValue] = useState("") // used for store the content of new comment


  // FETCH USER COMMENTS ON FIRST ENTRY
  // const pageNum = props.pageNum
  useEffect(async () => {
    try {
      const result = await axios.get(backendURL + "commentls/" + pageNum);
      // console.log(result)
      // console.log(typeof result)
      // console.log(typeof response)
      //   setResponse(result.data);

      var fetchedComments = [];
      result.data.forEach((element) => {
        const userComment = {
          avatar: "https://joeschmoe.io/api/v1/random",
          author: element.FirstName + " " + element.LastName,
          content: <p>{element.content}</p>,
        };
        fetchedComments.push(userComment);
      });

      setData(fetchedComments);
    } catch (error) {
      console.error(error);
    }
  }, [submitting]);

  console.log(data);



  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setSubmitStatus(true);
    setValue("");
    setTimeout(() => {
      setSubmitStatus(false);
      
    }, 1000);
    insertComment()
  }


  const insertComment = async () =>{
    //const data = new FormData(event.currentTarget);
    console.log("token is: " + window.localStorage.getItem("token"))
    try {
        const res = await axios.post("http://localhost:3001/commentInsert",{
          pageNum,
          UserId: userID,
          content:value
      },{
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      });

    } catch (error) {
      console.error(error)
    }
  }





  return (
    <>
      <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <li>
            <Comment
              author={item.author}
              avatar={item.avatar}
              content={item.content}
            />
          </li>
        )}
      />

      <Form.Item>
        <TextArea rows={4} onChange={e => setValue(e.target.value)} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={handleSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
};

export default UserComment