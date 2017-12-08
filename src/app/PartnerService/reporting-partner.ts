import { Inow } from './inow';
import { GsNumber } from './gs-number';

export interface ReportingPartner {
    PartnerId: String;
    // 0 is unmodified, 1 is updated, 2 is new, -1 is undefined (i.e. new but not filled out)
    status: number;
    PartnerInow: Inow;
    gsNumber: GsNumber;
}
