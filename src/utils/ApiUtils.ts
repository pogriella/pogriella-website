class ApiUtils {
    static async postData(url: string, data: object = {}): Promise<JSON> {
        try {
            let json: Promise<JSON>;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            json = await response.json();
            return json;
        }
        catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }

    static async getData(url: string, headers: HeadersInit = {}): Promise<JSON> {
        try {
            let json: Promise<JSON>;
            const response = await fetch(url, {
                method: "GET",
                headers: headers,
            });
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            json = await response.json();
            return json;
        }
        catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }
}

export { ApiUtils };