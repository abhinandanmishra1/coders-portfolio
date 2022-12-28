import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { loadUser, updateUser } from "stores/userProfile";

const Profile = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isLoggedIn = localStorage.getItem("loggedIn") === "true";
	const { profile: user } = useSelector((store) => store.user);

	const {
		leetcodeUsername,
		codeforcesUsername,
		githubUsername,
		codechefUsername,
		hackerrankUsername,
		username,
		email: userEmail,
	} = user || {};

	const [formData, setFormData] = useState({
		leetcodeUsername,
		codeforcesUsername,
		githubUsername,
		codechefUsername,
		hackerrankUsername,
		username,
		userEmail,
	});

	useEffect(() => {
		if (isLoggedIn) {
			if (!user) {
				const token = localStorage.getItem("token");
				dispatch(loadUser({ token }));
			} else {
				setFormData({
					leetcodeUsername,
					codeforcesUsername,
					githubUsername,
					codechefUsername,
					hackerrankUsername,
					username,
					userEmail,
				});
			}
		} else {
			navigate("/auth/login");
		}
	}, [
		isLoggedIn,
		navigate,
		dispatch,
		user,
		leetcodeUsername,
		codeforcesUsername,
		githubUsername,
		codechefUsername,
		hackerrankUsername,
		username,
		userEmail,
	]);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Save the updated form data to the server
    const {
			leetcodeUsername,
			codeforcesUsername,
			githubUsername,
			codechefUsername,
			hackerrankUsername,
			username,
			userEmail: email,
		} = formData;
		
		dispatch(updateUser({
			leetcodeUsername,
			codeforcesUsername,
			githubUsername,
			codechefUsername,
			hackerrankUsername,
			username,
			email,
		}));
	};

	const logout = useCallback(() => {
		localStorage.setItem("loggedIn", false);
		localStorage.removeItem("token");
		navigate("/auth/login");
	}, [navigate]);

	const viewPortfolio = useCallback(() => {
		navigate(`/${username}/profile`);
	}, [navigate, username]);

	return (
		<div>
			<h1>
				Profile {formData.username} 
				<div>
				<Button onClick={logout}>Logout</Button>
				<Button onClick={viewPortfolio}>View Portfolio</Button>
				</div>
			</h1>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label for="userEmail">Email</Label>
					<Input
						type="text"
						name="userEmail"
						id="userEmail"
						value={formData.userEmail}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="leetcodeUsername">LeetCode username</Label>
					<Input
						type="text"
						name="leetcodeUsername"
						id="leetcodeUsername"
						value={formData.leetcodeUsername}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="codeforcesUsername">Codeforces username</Label>
					<Input
						type="text"
						name="codeforcesUsername"
						id="codeforcesUsername"
						value={formData.codeforcesUsername}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="githubUsername">GitHub username</Label>
					<Input
						type="text"
						name="githubUsername"
						id="githubUsername"
						value={formData.githubUsername}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="codechefUsername">Codechef username</Label>
					<Input
						type="text"
						name="codechefUsername"
						id="codechefUsername"
						value={formData.codechefUsername}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="codechefUsername">Codechef username</Label>
					<Input
						type="text"
						name="codechefUsername"
						id="codechefUsername"
						value={formData.codechefUsername}
						onChange={handleChange}
					/>
				</FormGroup>
				<Button type="submit" color="primary">
					Save Changes
				</Button>
			</Form>
		</div>
	);
};

export default Profile;
