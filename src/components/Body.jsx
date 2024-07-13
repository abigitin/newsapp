import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
	const [text, setText] = useState("");
	const [count, setCount] = useState(0);

	function handleUPClick() {
		let newText = text.toUpperCase();
		setText(newText);
	}
	function handleLOClick() {
		let newText = text.toLowerCase();
		setText(newText);
	}
	function handleClear() {
		let newText = "";
		setText(newText);
	}

	function handleOnChange(event) {
		setText(event.target.value);
	}

	useEffect(() => {
		const words = text.split(" ");

		let wordCount = 0;
		words.forEach((word) => {
			if (word.trim() !== "") {
				wordCount++;
			}
		});
		setCount(wordCount);
	});
	return (
		<div className="ml-16 mr-16">
			<div className="text-center bg-blue-500 text-white font-extrabold text-3xl mt-9 p-6 font-serif">
				Welcome To Word Counter
			</div>
			<div className=" text-center bg-yellow-100 ">
				You can calculate your word here
			</div>
			<div className=" bg-red-50 mt-4 flex justify-center">
				<div className="form-group font-serif text-lg">
					<label htmlFor="exampleFormControlTextarea1">
						Enter your text here{" "}
					</label>
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="8"
						cols="100"
						value={text}
						onChange={handleOnChange}
					></textarea>
				</div>
			</div>
			<button
				onClick={handleUPClick}
				className=" p-2 bg-blue-400 text-white m-2 rounded-full hover:bg-blue-500"
			>
				Uppar Case
			</button>
			<button
				onClick={handleLOClick}
				className=" p-2 bg-blue-400 text-white m-2 rounded-full hover:bg-blue-500"
			>
				Lower Case
			</button>
			<button
				onClick={handleClear}
				className=" p-2 bg-blue-400 text-white m-2 rounded-full hover:bg-blue-500"
			>
				Clear
			</button>

			<div>
				<p className="flex justify-end p-2" id="tt">
					{count} Words and {text.length} Characters
				</p>
			</div>
		</div>
	);
};

export default Body;
