import { Inow } from './inow';
import { GsNumber } from './gs-number';

export interface ReportingPartner {
    PartnerId: String;
    PartnerInow?: Inow;
    gsNumber?: GsNumber;
}
