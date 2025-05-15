export class Responder {
    static ok(data) {
        return {status_code: 200, message: "OK", data}
    }
    static notFound() {
        return {status_code: 404, message: "Not Found"}
    }
    static internal() {
        return {status_code: 500, message: "Internal Server Error"}
    }
}