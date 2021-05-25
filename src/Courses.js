import React from 'react'
import { Box, Button, Image, Link, Select, Text } from "@chakra-ui/react";

function CourseCard(props) {
	return(
		<Box w={[100+"%", 90+"%", 50+"%"]} maxW="500px" m={"auto"}>
			<Box boxShadow={"0 0 2px 1px gray"} m={2}>
				<Image src={props.courseImage} alt="Course 1"></Image>
				<Box p={3}>
					<Box as="span" fontSize={1.5+"em"}>{props.title}</Box>
					<Text fontSize="sm">{props.info}</Text>
					<Box d="flex" justifyContent="space-between" py={5}>
						<Link href={props.coursePage}>More Info</Link>
						<Button colorScheme="blue">Enroll Now</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

function Courses() {
	return (
		<>
			<div id="header" className = "my-5 align-items-center">
				<h1 className = "text-center"> Courses </h1>
			</div>
			<Box d="flex" justifyContent="space-between" flexWrap="wrap" className="container courses-body" py={5}>
				<Select placeholder="All Courses" mb={2+"em"}>
					<option value="basic-dsa"> Basic Data Structures and Algorithms </option>
					<option value="advanced-dsa"> Advanced Data Structures and Algorithms </option>
				</Select>
				<CourseCard ID={1} title="Course Title" info={"A brief description goes here ..."} courseImage="https://www.dreamhost.com/blog/wp-content/uploads/2017/10/online_course-750x375.jpg" coursePage='#' />
				<CourseCard ID={2} title="New Course Title" info={"Another brief description goes here ..."} courseImage="https://www.dreamhost.com/blog/wp-content/uploads/2017/10/online_course-750x375.jpg" coursePage='#' />
			</Box>
		</>
	);
}

export default Courses;