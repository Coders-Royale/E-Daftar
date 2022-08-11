const baseUrl = "https://sih-2022-server.azurewebsites.net/api";
const baseUrlChat = "https://sih-email.herokuapp.com/api/chat";

const apiEndPoints = {
  // GET REQUESTS
  getEmployee: `/getEmployee`,
  getAdmin: `/getAdmin`,
  trackStatus: `/trackStatus`,
  listDocument: `/listDocument`,
  rooms: `/rooms`,
  messages: `/messages`,
  conversation: `/conversation`,
  loadMessages: `/loadMessages`,

  // POST REQUESTS
  login: `/login`,
  createEmployee: `/createEmployee`,
  createDocument: `/createDocument`,
  uploadFile: `/uploadFile`,
  assignDocument: `/assignDocument`,
  forwardToAdmin: `/forwardToAdmin`,
  rejectDocument: `/rejectDocument`,
  changePassword: `/changePassword`,
};

// GET REQUESTS
export async function getEmployee(params) {
  try {
    const res = (
      await fetch(
        baseUrl + apiEndPoints.getEmployee + `?departmentId=${params.departmentId}` + `&employeeId=${params.employeeId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-type": "application/json",
          },
        }
      ).then((res) => res.json())
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getAdmin(params) {
  try {
    const res = (
      await fetch(
        baseUrl + apiEndPoints.getAdmin + `?departmentId=${params.departmentId}` + `&adminId=${params.adminId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-type": "application/json",
          },
        }
      ).then((res) => res.json())
    );
    return res;
  }
  catch (error) {
    console.log(error);
  }
}

export async function trackStatus(params) {
  try {
    const res = (
      await fetch(
        baseUrl + apiEndPoints.trackStatus + `?documentId=${params.documentId} ` + `&employeeId=${params.employeeId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-type": "application/json",
          },
        }
      ).then((res) => res.json())
    );
    return res;
  }
  catch (error) {
    console.log(error);
  }
}

export async function listDocument(params) {
  try {
    const res = (
      await fetch(
        baseUrl + apiEndPoints.listDocument + `?employeeId=${params.employeeId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-type": "application/json",
          },
        }
      ).then((res) => res.json())
    );
    return res;
  }
  catch (error) {
    console.log(error);
  }
}

export async function getRooms(params) {
  try {
    const res = (
      await fetch(
        baseUrlChat + apiEndPoints.rooms + `?employeeId=${params.employeeId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-type": "application/json",
          },
        }
      ).then((res) => res.json())
    );
    return res;
  }
  catch (error) {
    console.log(error);
  }
}

// POST REQUESTS
export async function login(data) {
  try {
    const res = (
      await fetch(baseUrl + apiEndPoints.login, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json())
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function createEmployee(data) {
  try {
    const res = (
      await fetch(baseUrl + apiEndPoints.createEmployee, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json())
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadFile(data) {
	try {
		const res = (
			await fetch(baseUrl + apiEndPoints.uploadFile, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
					"Content-type": "multipart/form-data",
				},
				body: JSON.stringify(data),
			}).then((res) => res.json())
		);
		return res;
	} catch (error) {
		console.log(error);
	}
}

export async function createDocument(data) {
  try {
    const res = (
      await fetch(baseUrl + apiEndPoints.createDocument, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json())
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function assignDocument(data) {
  try {
    const res = (
      await fetch(baseUrl + apiEndPoints.assignDocument, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json())
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function forwardToAdmin(data) {
  try {
    const res = (
      await fetch(baseUrl + apiEndPoints.forwardToAdmin, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json())
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}


export async function rejectDocument(data) {
  try {
    const res = (
      await fetch(baseUrl + apiEndPoints.rejectDocument, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json())
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function changePassword(data) {
  try {
    const res = (
      await fetch(baseUrl + apiEndPoints.changePassword, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json())
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}