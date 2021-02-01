import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchFilter } from 'redux/slices/coinsListSlice';
import { InputAdornment, TextField } from '@material-ui/core';
import { debounce } from 'utils';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

const WhiteBorderTextField = styled(TextField)`
	margin-left: 4px;
	/* & label.Mui-focused {
		color: white;
	} */
	/* & .MuiInput-underline:after {
		border-bottom-color: red;
	} */
	.MuiOutlinedInput-root {
		color: white;
		& fieldset {
			border-color: white;
			border-radius: 0;
		}
		&:hover fieldset {
			border-color: #fed128;
		}
	}
`;

const SearchInput = () => {
	const dispatch = useDispatch();
	const [isFocused, setIsFocused] = React.useState(false);

	const applySearch = (e) => {
		const fn = debounce((value) => dispatch(setSearchFilter(value)), 100);
		fn(e.target.value);
	};
	return (
		<WhiteBorderTextField
			spellCheck="false"
			variant="outlined"
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
			onChange={applySearch}
			size="small"
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<SearchIcon style={{ opacity: isFocused ? 1 : 0.5 }} />
					</InputAdornment>
				),
			}}
		/>
	);
};

export default SearchInput;
