import React from 'react';
import { useForm } from 'react-hook-form';

function UserForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      console.log('User created:', result);
      alert('User successfully submitted!');
      reset(); // clear the form
    } catch (error) {
      console.error('Submission failed:', error.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>Name:</label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Enter name"
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Email:</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address'
              }
            })}
            placeholder="Enter email"
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} style={{ marginTop: '15px' }}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default UserForm;
