import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

const index = () => (
  <div>
    <div className="m-4 ">
      <Tree
        style={{ width: "40px" }}
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"20px"}
        label={<StyledNode>Director General</StyledNode>}
        className=""
      >
        <TreeNode label={<StyledNode>Director </StyledNode>}>
          <TreeNode label={<StyledNode>Joint Director-I</StyledNode>}>
            <TreeNode label={<StyledNode>Assistant Director(Vsp.)</StyledNode>}>
              <TreeNode
                label={<StyledNode>Deputy Director(Vishakapatnam)</StyledNode>}
              >
                <TreeNode label={<StyledNode>Drug Inspectors(6)</StyledNode>}>
                  <TreeNode
                    label={<StyledNode>Drug Inspectors(3)</StyledNode>}
                  />
                </TreeNode>
                <TreeNode
                  label={<StyledNode>Assistant Director(Skl.)</StyledNode>}
                >
                  <TreeNode
                    label={<StyledNode>Drug Inspectors(3)</StyledNode>}
                  />
                </TreeNode>
                <TreeNode
                  label={<StyledNode>Assistant Director(Skl.)</StyledNode>}
                >
                  <TreeNode
                    label={<StyledNode>Drug Inspectors(2)</StyledNode>}
                  />
                </TreeNode>
              </TreeNode>
              <TreeNode
                label={<StyledNode>Deputy Director(Guntur) </StyledNode>}
              >
                <TreeNode
                  label={<StyledNode>Assistant Director(Skl.)</StyledNode>}
                >
                  <TreeNode
                    label={<StyledNode>Drug Inspectors(6)</StyledNode>}
                  />
                </TreeNode>
                <TreeNode
                  label={<StyledNode>Assistant Director(Skl.)</StyledNode>}
                >
                  <TreeNode
                    label={<StyledNode>Drug Inspectors(6)</StyledNode>}
                  />
                </TreeNode>
                <TreeNode
                  label={<StyledNode>Assistant Director(Skl.)</StyledNode>}
                >
                  <TreeNode
                    label={<StyledNode>Drug Inspectors(6)</StyledNode>}
                  />
                </TreeNode>
              </TreeNode>
            </TreeNode>

    </TreeNode>
        </TreeNode>
        <TreeNode label={<StyledNode>Assistant Director</StyledNode>}>
          <TreeNode label={<StyledNode>Drug Inspectors</StyledNode>} />
        </TreeNode>
      </Tree>
    </div>{" "}
  </div>
);
export default index;
