import React from 'react';
import { Box, Button, Image, Link, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
// import { SearchIcon, StarIcon } from "@chakra-ui/icons";

class CourseDetails extends React.Component {
	render() {
		return(
			<Box>
				<Box id="header" className = "my-5 align-items-center">
					<h1 className = "text-center"> About this Course </h1>
				</Box>
				<Box background="linear-gradient(135deg, #d0f4e488, transparent, #d0f4e444)" _hover={{background:"linear-gradient(45deg, #d0f4e444, transparent, #d0f4e4aa)"}}>
					<Box className="topBox" d="flex" flexWrap="wrap">
						<Image src="https://www.dreamhost.com/blog/wp-content/uploads/2017/10/online_course-750x375.jpg" w={["100%", "100%", "100%", "40%"]}></Image>
						<Box className="course-brief" w={["100%", "100%", "100%", "60%"]} p="2">
							<Text fontSize="2em" _hover={{fontWeight:"bold"}}>Course Example Title - Hashing </Text>
							<Text>This briefs about what the course will cover. The course is about clearing your basics over hashing and features initial Direct Address Arrays, Hash Tables with linear, quadratic and exponential collision resolution. More details in the course, go ahead and check it out! </Text>
							<br/>
							<Link fontSize="md" to="#" _hover={{textDecoration:"none"}} pt={2}>By: Course Author</Link>
							<br/>
							<Button size="lg" colorScheme="blue" mt="1em">Enroll Now</Button>
						</Box>
					</Box>
					<Box className="container-fluid course-contents">
						<h3 className="mt-4 subheading"><strong> Course Contents </strong></h3>
						<Accordion defaultIndex={[0]} allowMultiple>
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											Section 1: Introduction and Prequisite Knowledge
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<Box d="grid">
										<Button className="my-2" variant="link" _focus={{boxShadow:0}} >Video 1: Introduction to Topic</Button>
										<Button className="my-2" variant="link" _focus={{boxShadow:0}} >Video 2: Direct Address Table </Button>
										<Button className="my-2" variant="link" _focus={{boxShadow:0}} >Video 3: Basics + Need of Hashing </Button>
										<Button className="my-2" variant="link" _focus={{boxShadow:0}} >Video 4: Types of Hashing </Button>
									</Box>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											Section 2
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<Box d="grid">
										<Button className="my-2" variant="link" _focus={{boxShadow:0}} >Video 1: Collisions in Hashing</Button>
										<Button className="my-2" variant="link" _focus={{boxShadow:0}} >Video 2: Types of collision resolution </Button>
										<Button className="my-2" variant="link" _focus={{boxShadow:0}} >Video 3: Need of collision resolution </Button>
										<Button className="my-2" variant="link" _focus={{boxShadow:0}} >Video 4: Buckets via Linked List with Hashing </Button>
										<Button className="my-2" variant="link" _focus={{boxShadow:0}} >Video 5: Further Recommendations </Button>
									</Box>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>

						<h3 className="mt-4 subheading"><strong> About the Course Creator </strong></h3>
						<Box p="4">
							<Text>This course is curated by Mrs. XYZ Trainer, who is an expert professional working in the application engineering field for her own company for over past X Years. She has a good hold over the ins and outs of Industrial Software Engineering practices and has a good knowledge of core software concepts. This and all other courses of her come with the personal experience and touch that she has over such fundamentals which ensure the best of the available content delivery to all the virtual students enrolled in these courses. </Text>
						</Box>

					</Box>
				</Box>
			</Box>
		);
	}
}



export default CourseDetails;