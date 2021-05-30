import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input, Box, Button, Image, Select, Text } from "@chakra-ui/react";
import { SearchIcon, StarIcon } from "@chakra-ui/icons";

function CourseCard(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return(
		<>
			<Box w={[100+"%", 90+"%", 50+"%"]} maxW="500px" m={"auto"} className="course">
				<Box boxShadow={"0 0 2px 1px gray"} m={2}>
					<Image src={props.courseImage} alt="Course 1"></Image>
					<Box p={3}>
						<Box as="span" className="course-title" fontSize={1.5+"em"}>{props.title}</Box>
						<Text fontSize="sm">{props.info}</Text>
						<Box d="flex" justifyContent="space-between" fontSize="xl" py={2}>
							<Box d="flex" mt="2" alignItems="center">
								{Array(5).fill("").map((_, index) => (
									<StarIcon key={index} color={index < props.rating ? "teal.500" : "gray.300"} />
								))}
								<Box as="span" ml="2" color="gray.600" fontSize="sm">
									{/* {props.reviewCount} reviews */}
								</Box>
							</Box>
							<strong>₹{props.price}</strong>
						</Box>
						<Box d="flex" justifyContent="space-between" py={5}>
							<Button variant="ghost" onClick={onOpen}>More Info</Button>
							<Button colorScheme="blue">Enroll Now</Button>
						</Box>
					</Box>
				</Box>
			</Box>
			<Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={true} scrollBehavior={"inside"}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{props.title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{props.info}
					</ModalBody>

					<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

function Courses() {

	// A Simple search based on matching query contents with given query and set only corresponding matching cards to be displayed
	let simpleCourseSearchFilter = (query) => {
		let courseCards = document.querySelectorAll(".course");
		if (query) {
			courseCards.forEach((courseCard)=>{ 
				if (courseCard.querySelector(".course-title").innerText.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
					courseCard.style.display = "block"; 
				} else {
					courseCard.style.display = "none"; 
				}
			});
		}
		else {
			// Setting empty or no query to default to display all courseCards
			courseCards.forEach((courseCard)=>{ courseCard.style.display = "" });
		}
	};

	return (
		<>
			<div id="header" className = "my-5 align-items-center">
				<h1 className = "text-center"> Courses </h1>
			</div>
			<Box d="flex" justifyContent="space-between" flexWrap="wrap" className="container courses-body" py={5}>
				<Text pb={4}>
					Choose from a variety of topics needed to ace your programming, creativity and problem-solving skills. All specially crafted by experts in that domain, and made available for you to get benefitted with.
				</Text>
				<Select placeholder="All Courses" mb="2em">
					<option value="basic-dsa"> Basic Data Structures and Algorithms </option>
					<option value="advanced-dsa"> Advanced Data Structures and Algorithms </option>
				</Select>
				<Box w="100%" className="mb-4" textAlign="end">
					<Input id="searchCoursesInput" placeholder="Search for a particular course" w={["80%", "90%"]} />
					<Button id="searchButton" onClick={()=>{simpleCourseSearchFilter(document.querySelector("#searchCoursesInput").value)}} colorScheme="blue" textAlign="end" w={["20%", "10%"]}> <SearchIcon></SearchIcon> </Button>
				</Box>

				<CourseCard ID={1} title="Course Title" info={"A brief description goes here ..."} courseImage="https://www.dreamhost.com/blog/wp-content/uploads/2017/10/online_course-750x375.jpg" price="999" rating={3} coreCategory="basic" />
				<CourseCard ID={2} title="New Course Title" info={"Another brief description goes here ..."} courseImage="https://www.dreamhost.com/blog/wp-content/uploads/2017/10/online_course-750x375.jpg" price="999.99" rating={4} coreCategory="advanced" />
			</Box>
		</>
	);
}

export default Courses;