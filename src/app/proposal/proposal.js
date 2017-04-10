"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Proposal = (function () {
    function Proposal(id, customer, porfolio_url, tools, estimated_hours, hourly_rate, weeks_to_complete, client_email) {
        if (porfolio_url === void 0) { porfolio_url = "http:// "; }
        this.id = id;
        this.customer = customer;
        this.porfolio_url = porfolio_url;
        this.tools = tools;
        this.estimated_hours = estimated_hours;
        this.hourly_rate = hourly_rate;
        this.weeks_to_complete = weeks_to_complete;
        this.client_email = client_email;
    }
    return Proposal;
}());
exports.Proposal = Proposal;
// Example data
// 15,'Abc Company', 'http://portfolio.com', 'RoR', 150,120, 15, 'email@email'
//# sourceMappingURL=proposal.js.map