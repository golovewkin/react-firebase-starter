import React from "react";
import { COMMON } from "../../constants/COMMON";
import { INQUIRY_STATUSES } from "../../constants/INQUIRY_STATUSES";
import EmptyCircleIconComponent from "../../components/library-based-components/icons/EmptyCircleIconComponent";
import CircleIconComponent from "../../components/library-based-components/icons/CircleIconComponent";
import VerifiedIconComponent from "../../components/library-based-components/icons/VerifiedIconComponent";

const InquiryStatusCell = ({ item, onClick }) => {
  const status = item.status;
  return (
    <div>
      {status ?? COMMON.NA}
      {status === INQUIRY_STATUSES.CREATED && (
        <EmptyCircleIconComponent onClick={onClick} />
      )}
      {status === INQUIRY_STATUSES.APPROVED && <CircleIconComponent disabled />}
      {status === INQUIRY_STATUSES.TAKEN && <VerifiedIconComponent disabled />}
    </div>
  );
};

export default InquiryStatusCell;