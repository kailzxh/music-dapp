import React from "react";

import { Notification1 } from "../SVG/index";

const Notifications = ({ setEmail }) => {
  return (
    <div className="min-w-0 flex-1">
      <div className="flex w-full flex-1 flex-col">
        <h1 className="hidden text-center font-title text-title-l font-medium text-black md:block md:text-left">
          Notifications
        </h1>
        <div className="z-above1 flex w-full flex-col">
          <div className="md:pt-4" style={{ opacity: 1 }}>
            <div
              data-virtuoso-scroller="true"
              style={{
                position: "relative",
                willChange: "height",
                height: "65px",
              }}
            >
              <div
                data-viewport-type="window"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "0px",
                }}
              >
                <div
                  data-test-id="virtuoso-item-list"
                  style={{
                    boxSizing: "border-box",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    marginTop: "0px",
                  }}
                >
                  <div
                    data-index={0}
                    data-known-size={65}
                    data-item-index={0}
                    style={{ overflowAnchor: "none" }}
                  >
                    <div style={{ opacity: 1, minHeight: "64px" }}>
                      <div style={{ opacity: 1, minHeight: "64px" }}>
                        <div className="group relative z-base flex min-h-[40px] w-full items-center justify-between gap-0.5 py-4 text-base-m after:absolute after:inset-0 after:-left-4 after:-right-4 after:z-below after:rounded-[6px]  after:content-[''] after:hover:bg-base50 md:min-h-[48px] md:border-b md:border-b-base200 lt:py-3 ">
                          <div className="flex w-full cursor-pointer items-center gap-2 md:gap-3">
                            <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-[6px] bg-base900 ">
                              <Notification1 />
                            </div>
                            <div className="flex flex-wrap">
                              <span className="whitespace-nowrap font-semibold">
                                GM frens!&nbsp;
                              </span>
                              <span>Get&nbsp;</span>
                              <span className="md:hidden">emails&nbsp;</span>
                              <span className="hidden md:block">
                                email notifications&nbsp;
                              </span>
                              <br className="block md:hidden" />
                              <span>on new drops</span>
                            </div>
                          </div>
                          <div className="min-w-[80px] lt:min-w-[124px] dt:min-w-[136px]">
                            <button
                              onClick={() => setEmail(true)}
                              className="c-bPnuSX c-bPnuSX-kAMERu-size-XS c-bPnuSX-iRULOu-variant-tertiary hidden h-7 min-w-[78px] flex-shrink-0 px-1 py-2 transition-all duration-500 ease-in-out hover:bg-white hover:shadow-tertiary lt:flex"
                            >
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
