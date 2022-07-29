const baseUrl = "https://sih-2022-server.azurewebsites.net/api";

const apiEndPoints = {
  login: `/login`,
};

// export async function getStudentDetails(params) {
//   try {
//     const res = (
//       await fetch(
//         baseUrl + apiEndPoints.getStudentDetails + `?studentid=${params.studentid}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem(
//               localStorageKey.jwtToken
//             )}`,
//             "Content-type": "application/json",
//           },
//         }
//       ).then((res) => res.json())
//     );
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// }

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