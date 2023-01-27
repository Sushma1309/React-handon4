import React from 'react';

const Student = () => {
  return (
    <div className='student'>
      <h2>Student Details</h2>
      <button className='btn'>Add New Student</button>
      <table className='table'>
        
<tr>
<th></th>
<td>Age</td>
<th>Name</th>
<th>Course</th>
<th>Batch</th>
</tr>

<hr  />
<tr>
<td>1</td>
<td>25</td>
<td>Sushma</td>
<td>Computer Science</td>
<td>April</td>
</tr>

<hr  />

<tr>
<td>2</td>
<td>22</td>
<td>Prasidh</td>
<td>Biotech</td>
<td>May</td>
</tr>

<hr  />

<tr>
<td>3</td>
<td>25</td>
<td >Vaibhav</td>
<td>MBA</td>
<td>Jan</td>
</tr>

      </table>
    </div>
  )
}

export default Student;