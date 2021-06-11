import React,{useState} from 'react'
// import { Route } from "react-router";
import { chakra, Input, Box, Button, Image, Link, Select, Text ,SimpleGrid} from "@chakra-ui/react";
import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import {courses} from './data/courses'
import ReactPaginate from 'react-paginate';
import './css/pagination.css'
import {recentCourses} from './data/recentCourses'



function CourseCard(props) {
	return(
		
		<Box w="100%" m="auto" className="course mb-5">
			
			<Box d="flex" flexDirection={{base:"column", md:"row"}} boxShadow="0 0 2px 1px gray" _hover={{boxShadow:"0 0 4px 2px gray"}} style={{borderRadius:"15px"}} m={2}>
				<Image src={props.courseImage} alt={props.title} maxW={{base:"600px", md:"350px"}} style={{borderRadius:"15px"}}></Image>
				<Box p={3} w="100%" pl={{xl:"2em"}}>
					<Box as="span" className="course-title" fontSize={1.5+"em"}>{props.title}</Box>
					<Text fontSize="sm">{props.info}</Text>
					<Link fontSize="md" to="#" _hover={{textDecoration:"none"}} pt={2}>By: {props.author}</Link>
					<Box d="flex" justifyContent="space-between" fontSize="xl" py={2}>
						<Box d="flex" mt="2" alignItems="center">
							{Array(5).fill("").map((_, index) => (
								<StarIcon key={index} color={index < props.rating ? "teal.500" : "gray.300"} />
							))}
							<Box as="span" ml="2" color="gray.600" fontSize="sm">
								{props.reviewCount} reviews
							</Box>
						</Box>
						<chakra.strong>₹{props.price}</chakra.strong>
					</Box>
					<Box d="flex" justifyContent="space-between" py={5}>
						<Link href={/*match.url + */ "/courses" + "/course-details"}>More Info</Link>
						<Button colorScheme="blue">Enroll Now</Button>
					</Box>
				</Box>
			</Box>
		
		</Box>
		

);
}

function Courses() {


	// A Simple search based on matching query contents with given query and set only corresponding matching cards to be displayed
	let simpleCourseSearchFilter = (query) => {


		let courseCards = document.querySelectorAll(".course");
		

		
		if (query) {
	
	  
			
				{courseCards.forEach((courseCard)=>{
					
				if (courseCard.querySelector(".course-title").innerText.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
					courseCard.style.display = "block"; 
				} else {
					courseCard.style.display = "none"; 
				}

			})} 
			  
			
			
		
		}
		else {
			// Setting empty or no query to default to display all courseCards
			courseCards.forEach((courseCard)=>{ courseCard.style.display = "" });
		}
	};

	// Pagination setup
		const [currentPage, setCurrentPage] = useState(0);
		const [data, setData] = useState(courses);
		const PER_PAGE = 3;
		const offset = currentPage * PER_PAGE;
		const currentPageData = data
			.slice(offset, offset + PER_PAGE)
			.map((course) => 
			<CourseCard key={course.ID} ID={course.ID} author={course.author} title={course.title} info={course.info} courseImage={course.courseImage} price={course.price} rating={course.rating} coreCategory={course.coreCategory} />);
			const pageCount = Math.ceil(data.length / PER_PAGE);

		function handlePageClick({ selected: selectedPage }) {
			setCurrentPage(selectedPage);
		}

		function handleKeyPress(e){
			console.log("hello")
				if(e.Key==="Enter"){
					console.log("hello")
					simpleCourseSearchFilter(document.querySelector("#searchCoursesInput").value)
				}
		}

	return (
		<>



			<Box id="header" className = "my-5 align-items-center">
				<chakra.h1 className = "text-center"> Let's Start Learning </chakra.h1>
			</Box>
			<Box d="flex" justifyContent="space-between" flexWrap="wrap" className="container courses-body" py={5}>
				<Text pb={4}>
					Choose from a variety of topics needed to ace your programming, creativity and problem-solving skills. All specially crafted by experts in that domain, and made available for you to get benefitted with.
				</Text>
				<Box  className= "search-category-div" >

				<Select placeholder="All Courses" mb="2em">
					<option value="basic-dsa"> Basic Data Structures and Algorithms </option>
					<option value="advanced-dsa"> Advanced Data Structures and Algorithms </option>
				</Select>
				<Box w="100%" className="mb-4" textAlign="end">
					<Input id="searchCoursesInput" placeholder="Search for a particular course" w={["80%", "90%"]} />
					<Button id="searchButton" onKeyDown={()=>console.log("hello")} onClick={()=>{simpleCourseSearchFilter(document.querySelector("#searchCoursesInput").value)}} colorScheme="blue" textAlign="end" w={["20%", "10%"]}> <SearchIcon></SearchIcon> </Button>
				</Box>
				</Box>
        
				<Box id="header" className = "my-5 align-items-center">
				<chakra.h2 > Recently Added </chakra.h2>
			</Box>

		<section > 

  <div className="cards-wrapper">
	  
    {recentCourses.map((course)=>{
return (
<div className="recent-card" key={course.ID}>
<div className="image-box">
  <img src={course.courseImage} alt={course.title}/>
</div>
<div className="recent-card-content">
 
  <h2 className="recent-card-title">{course.title}</h2>
  <small className="sub-title">By: {course.author}</small>
  <div className="rating">
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
  </div>
  <div className="price-box">
    <p className="price">{course.price}</p>

  </div>
  <Link href={/*match.url + */ "/courses" + "/course-details"}><button className="btn">Enroll Now</button></Link>
  
</div>
</div>
 
)
    })}

 
  </div>
</section>

<Box id="header" className = "my-5 align-items-center">
				<chakra.h2>Explore More </chakra.h2>
			</Box>
<div className="cards-wrapper-pagination" >

			{currentPageData}
</div>
				<ReactPaginate
			previousLabel={"← Previous"}
			nextLabel={"Next →"}
			pageCount={pageCount}
			onPageChange={handlePageClick}
			containerClassName={"pagination"}
			previousLinkClassName={"pagination__link"}
			nextLinkClassName={"pagination__link"}
			disabledClassName={"pagination__link--disabled"}
			activeClassName={"pagination__link--active"}
			style={{marginTop:"1rem"}}
		/>
		</Box>
		</>
	);
}

export default Courses;