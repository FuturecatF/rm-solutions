function getResponseData(res: any) {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}

type dataType = {
    userEmail: string,
    userPhoneNumber: string,
    fullName: string,
    password: string
}

export const getRegister = (data: dataType) => {
    return fetch(`https://api.work.r-m.solutions/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data }),
    }).then(getResponseData);
}