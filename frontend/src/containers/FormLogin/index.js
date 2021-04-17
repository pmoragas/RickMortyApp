import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';

import styles from './styles.module.scss';

const FormLogin = ({ onSubmitForm, className }) => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		onSubmitForm(data);
	};

	return (
		<div className={classnames(styles.formContainer, className)}>
			<div className={styles.loginTitle}>Login</div>
			<form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputWrapper} >
                    <div className={styles.label}>Email</div>
                    <input label='Email' name="email" required {...register('email')}/>
                </div>
                <div className={styles.inputWrapper}>
                    <div className={styles.label}>Password</div>
                    <input
                        label='Password'
                        name="password"
                        required
                        {...register('password')}
                        type="password"
                        className={styles.password}
                    />
                </div>

				<div className={styles.buttonContainer}>
					<button type="submit" className={styles.button}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

FormLogin.propTypes = {
	onSubmitForm: PropTypes.func.isRequired,
	className: PropTypes.string,
};

FormLogin.defaultProps = {
	className: undefined,
};

export default FormLogin;
